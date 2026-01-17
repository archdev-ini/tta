import { getLatestVideos } from "@/lib/youtube";
import MediaGrid from "@/components/media/MediaGrid";
import MediaHeader from "@/components/media/MediaHeader";
import MediaFooter from "@/components/media/MediaFooter";

export const revalidate = 0; // Disable caching for debugging

export default async function Media() {
  const videos = await getLatestVideos();

  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <MediaHeader />

      <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5">
        <MediaGrid videos={videos} />
      </section>

      <MediaFooter />
    </div>
  );
}
