import GlitchText from "@/components/ui/GlitchText";
import { Youtube } from "lucide-react";
import Link from "next/link";
import { getLatestVideos } from "@/lib/youtube";
import MediaGrid from "@/components/media/MediaGrid"; // We'll create this client component for animations

export const revalidate = 3600; // Revalidate every hour

export default async function Media() {
  const videos = await getLatestVideos();

  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5">
        <div className="flex flex-col gap-6 max-w-4xl">
           <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Section 04 / Media</span>
           <GlitchText as="h1" text="CURATED REPOSITORY" className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground" />
        </div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5">
        <MediaGrid videos={videos} />
      </section>

      <section className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 bg-dot-pattern flex items-center justify-center text-center relative overflow-hidden">
         {/* Subtle Blue Accent */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 blur-[100px] -mr-32 -mt-32" />
         
         <div className="max-w-3xl flex flex-col items-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 group leading-none text-foreground">
               FULL ARCHIVE <br /> ON <span className="text-accent">YOUTUBE</span>
            </h2>
            <p className="text-foreground/40 mb-12 font-medium leading-relaxed">
               The TTA website acts as a high-speed gateway. For deep dives into our multi-hour playlist structures, visit our official channel.
            </p>
            <Link 
              href="https://www.youtube.com/@TheThinkingArchitect-t4p"
              className="btn-outline px-12 group flex items-center gap-4 transition-colors"
            >
              Access Channel <Youtube size={20} className="text-accent group-hover:scale-125 transition-transform" />
            </Link>
         </div>
      </section>
    </div>
  );
}
