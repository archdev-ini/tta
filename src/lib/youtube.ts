export interface ChannelStats {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  date: string;
  views?: string;
  duration?: string;
  likes?: string;
  commentCount?: string;
  tags?: string[];
}

const PLAYLIST_ID = "PLz-iC_fRiLMdfF41hmf3wEdIeTKd5tEhF";
let CACHED_CHANNEL_ID: string | null = null;

function formatDuration(isoDuration: string): string {
  if (!isoDuration) return "";
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return "";
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');
  
  const h = hours ? parseInt(hours) : 0;
  const m = minutes ? parseInt(minutes) : 0;
  const s = seconds ? parseInt(seconds) : 0;
  
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatViews(views: string): string {
    const v = parseInt(views);
    if (isNaN(v)) return "";
    if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
    if (v >= 1000) return (v / 1000).toFixed(1) + 'k';
    return v.toString();
}

export async function getChannelStats(): Promise<ChannelStats | null> {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    if (!API_KEY) return null;

    try {
        if (!CACHED_CHANNEL_ID) {
             const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
             const res = await fetch(playlistUrl, { next: { revalidate: 3600 } });
             if (!res.ok) return null;
             const data = await res.json();
             if (data.items && data.items.length > 0) {
                 CACHED_CHANNEL_ID = data.items[0].snippet.channelId;
             }
        }

        if (!CACHED_CHANNEL_ID) return null;

        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CACHED_CHANNEL_ID}&key=${API_KEY}`;
        const res = await fetch(url, { next: { revalidate: 3600 } });
        const data = await res.json();
        
        if (data.items && data.items.length > 0) {
            const stats = data.items[0].statistics;
            return {
                subscriberCount: formatViews(stats.subscriberCount),
                viewCount: formatViews(stats.viewCount),
                videoCount: stats.videoCount
            };
        }
        return null;
    } catch (e) {
        console.error("Failed to fetch channel stats", e);
        return null;
    }
}

export async function getLatestVideos(): Promise<Video[]> {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  
  try {
    if (!API_KEY || PLAYLIST_ID.includes("xxxx")) {
        console.log("[YouTube] Using Mock Data (No API Key or Invalid Playlist)");
        return MOCK_VIDEOS;
    }

    // --- Step 1: Fetch Playlist Items (IDs) ---
    console.log("[YouTube Fetch] Fetching Playlist...");
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
    const res = await fetch(playlistUrl, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
        throw new Error(`Playlist Fetch Failed: ${res.status}`);
    }
    
    const playlistData = await res.json();
    if (!playlistData.items || playlistData.items.length === 0) return MOCK_VIDEOS;

    const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
    
    if (playlistData.items[0]?.snippet?.channelId) {
        CACHED_CHANNEL_ID = playlistData.items[0].snippet.channelId;
    }

    // --- Step 2: Fetch Video Details (Stats & Duration) ---
    console.log("[YouTube Fetch] Fetching Video Details...");
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${API_KEY}`;
    const detailsRes = await fetch(detailsUrl, { next: { revalidate: 3600 } });
    
    if (!detailsRes.ok) {
        throw new Error(`Details Fetch Failed: ${detailsRes.status}`);
    }

    const detailsData = await detailsRes.json();
    
    // Map details back to an object for easy lookup
    const detailsMap = new Map();
    detailsData.items.forEach((item: any) => {
        detailsMap.set(item.id, item);
    });

    // --- Step 3: Combine Data ---
    return playlistData.items.map((item: any) => {
      const videoId = item.snippet.resourceId.videoId;
      const details = detailsMap.get(videoId);
      
      const publishedAt = item.snippet.publishedAt;
      const date = new Date(publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });

      return {
        id: videoId,
        title: item.snippet.title,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: item.snippet.thumbnails?.maxresdefault?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
        date: date,
        duration: details ? formatDuration(details.contentDetails.duration) : "",
        views: details ? formatViews(details.statistics.viewCount) : "",
        likes: details ? formatViews(details.statistics.likeCount) : "",
        commentCount: details ? formatViews(details.statistics.commentCount) : "",
        tags: details?.snippet?.tags || []
      };
    });

  } catch (error) {
    console.error("YouTube Fetch Error:", error);
    return MOCK_VIDEOS;
  }
}

const MOCK_VIDEOS: Video[] = [
  { id: "1", title: "Institutional Architectural Thought", url: "#", thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", date: "Oct 24, 2024", duration: "45:12", views: "1.2k" },
  { id: "2", title: "Building for Durability", url: "#", thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625", date: "Oct 18, 2024", duration: "28:05", views: "856" },
  { id: "3", title: "The Architectural Gateway", url: "#", thumbnail: "https://images.unsplash.com/photo-1470723710355-95304d8aece4", date: "Sep 30, 2024", duration: "1:02:10", views: "3.4k" },
];
