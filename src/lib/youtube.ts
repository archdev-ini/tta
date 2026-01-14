export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  date: string;
}

const PLAYLIST_ID = "PLz-iC_fRiLMdfF41hmf3wEdIeTKd5tEhF";

export async function getLatestVideos(): Promise<Video[]> {
  try {
    // Note: In a real production env with high traffic, caching validation is critical here.
    // For this implementation, we rely on Next.js fetch caching.
    
    // We'll use a public RSS-to-JSON bridge or direct XML parsing if simpler.
    // Since we are in a Node environment (Server Component), we can parse XML directly.
    // However, to keep it dependency-light, we'll do basic regex or use a robust fetch.
    
    // Actually, let's fetch the XML and fallback to a mock if it fails/is empty (safety).
    
    // URL for Channel Uploads or Playlist: https://www.youtube.com/feeds/videos.xml?playlist_id=...
    // But without the ID, we'll return the hardcoded mock for now to prevent breakage,
    // and allow the user to swap the ID.
    
    if (PLAYLIST_ID.includes("xxxx")) {
        // Return Mock Data if ID isn't set
        return MOCK_VIDEOS;
    }

    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`, { next: { revalidate: 3600 } });
    
    if (!res.ok) throw new Error("Failed to fetch YouTube feed");
    
    const xmlText = await res.text();
    
    // Simple regex parsing to avoid heavy XML parser dependencies for this specific feed structure
    // This is brittle but sufficient for standard YT feeds.
    const entries = xmlText.match(/<entry>[\s\S]*?<\/entry>/g) || [];
    
    return entries.map(entry => {
        const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
        const titleMatch = entry.match(/<title>(.*?)<\/title>/);
        const dateMatch = entry.match(/<published>(.*?)<\/published>/);
        
        const videoId = idMatch ? idMatch[1] : "";
        
        return {
            id: videoId,
            title: titleMatch ? titleMatch[1] : "Untitled Video",
            url: `https://www.youtube.com/watch?v=${videoId}`,
            thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
            date: dateMatch ? new Date(dateMatch[1]).toLocaleDateString() : "",
        };
    }).slice(0, 9); // Limit to latest 9

  } catch (error) {
    console.error("YouTube Fetch Error:", error);
    return MOCK_VIDEOS;
  }
}

const MOCK_VIDEOS: Video[] = [
  { id: "1", title: "Institutional Architectural Thought", url: "#", thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", date: "2024" },
  { id: "2", title: "Building for Durability", url: "#", thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop", date: "2024" },
  { id: "3", title: "The Architectural Gateway", url: "#", thumbnail: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop", date: "2024" },
];
