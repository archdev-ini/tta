
import Link from "next/link";
import { Youtube, Users, Eye, Video } from "lucide-react";
import { getChannelStats } from "@/lib/youtube";

export default async function MediaFooter() {
  const stats = await getChannelStats();

  return (
    <section 
      className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 bg-dot-pattern flex items-center justify-center text-center relative overflow-hidden"
    >
       {/* Subtle Blue Accent */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 blur-[100px] -mr-32 -mt-32" />
       
       <div className="max-w-3xl flex flex-col items-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 group leading-none text-foreground">
             FULL ARCHIVE <br /> ON <span className="text-accent">YOUTUBE</span>
          </h2>
          
          {stats && (
            <div className="grid grid-cols-3 gap-8 md:gap-16 mb-12 w-full max-w-2xl border-y border-foreground/5 py-8">
                <div className="flex flex-col items-center gap-2">
                    <Users className="text-accent mb-2" size={24} />
                    <span className="text-2xl md:text-3xl font-black">{stats.subscriberCount}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Subscribers</span>
                </div>
                <div className="flex flex-col items-center gap-2 border-x border-foreground/5">
                    <Eye className="text-accent mb-2" size={24} />
                    <span className="text-2xl md:text-3xl font-black">{stats.viewCount}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Total Views</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Video className="text-accent mb-2" size={24} />
                    <span className="text-2xl md:text-3xl font-black">{stats.videoCount}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Videos</span>
                </div>
            </div>
          )}

          <p className="text-foreground/40 mb-12 font-medium leading-relaxed max-w-xl">
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
  );
}
