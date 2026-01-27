import { getLatestVideos, getChannelStats, getLiveStatus, getVideoComments, searchVideos, PaginatedResult, Video } from "@/lib/youtube";
import MediaGrid from "@/components/media/MediaGrid";
import MediaHeader from "@/components/media/MediaHeader";
import MediaFooter from "@/components/media/MediaFooter";
import MediaHero from "@/components/media/MediaHero";
import MediaSearch from "@/components/media/MediaSearch";
import MediaCategories from "@/components/media/MediaCategories";

export const revalidate = 3600; // Cache for 1 hour default

export default async function Media({ searchParams }: { searchParams: Promise<{ q?: string, playlistId?: string }> }) {
  const { q, playlistId } = await searchParams;

  const stats = await getChannelStats();
  const isLive = await getLiveStatus();

  let videoData: PaginatedResult<Video>;
  let featuredVideo: Video | undefined;

  if (q) {
    const items = await searchVideos(q);
    videoData = { items };
  } else {
    videoData = await getLatestVideos(playlistId);
    const allVideos = videoData.items || [];
    if (allVideos.length > 0) {
      featuredVideo = allVideos[0];
      videoData = {
        items: allVideos.slice(1),
        nextPageToken: videoData.nextPageToken
      };
    }
  }

  const comments = featuredVideo ? await getVideoComments(featuredVideo.id) : [];

  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <MediaHeader stats={stats} isLive={isLive} />

      <section className="w-full max-w-[1600px] px-6 flex flex-col items-center gap-8 mb-12 relative z-20">
        <MediaSearch />
        <MediaCategories activeId={playlistId} />
      </section>

      {featuredVideo && !q && <MediaHero video={featuredVideo} comments={comments} />}

      <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5">
        <MediaGrid
          initialVideos={videoData.items}
          initialNextToken={videoData.nextPageToken}
          playlistId={playlistId}
        />
      </section>

      <MediaFooter />
    </div>
  );
}
