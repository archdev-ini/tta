
async function testFetch() {
  try {
    const PLAYLIST_ID = "PLz-iC_fRiLMdfF41hmf3wEdIeTKd5tEhF";
    console.log("Fetching playlist:", PLAYLIST_ID);
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`);
    
    if (!res.ok) {
        console.log("Fetch failed:", res.status, res.statusText);
        return;
    }
    
    const xmlText = await res.text();
    console.log("XML Length:", xmlText.length);
    console.log("First 500 chars:", xmlText.substring(0, 500));
    
    const entries = xmlText.match(/<entry[\s\S]*?<\/entry>/g) || [];
    console.log("Entries found:", entries.length);
    
    if (entries.length > 0) {
        const entry = entries[0];
        const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
        const titleMatch = entry.match(/<title>(.*?)<\/title>/);
        console.log("First Entry - ID:", idMatch ? idMatch[1] : "No match", "Title:", titleMatch ? titleMatch[1] : "No match");
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

testFetch();
