import GlitchText from "@/components/ui/GlitchText";
import { Send, Shield, Users, MessageSquare } from "lucide-react";

export default function Community() {
  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5">
        <div className="flex flex-col gap-6 max-w-4xl text-left">
           <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Section 05 / Discourse</span>
           <h1 className="flex flex-wrap gap-x-4 md:gap-x-6 text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground">
             <GlitchText as="span" text="THE" />
             <GlitchText as="span" text="TTA" font="font-logo" />
             <GlitchText as="span" text="HUB" />
           </h1>
        </div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 grid grid-cols-1 md:grid-cols-2 gap-20">
         <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-foreground">Real-time <br /> DISCOURSE</h2>
            <p className="text-xl text-foreground/50 leading-relaxed font-medium">
               The Thinking Architect community primarily lives on encrypted Telegram channels. 
               This is where rapid resource sharing, case study teardowns, and real-time discourse occur.
            </p>
            <a 
              href="https://t.me/thethinkingarchitect"
              className="btn-primary w-fit px-12 py-5 text-xl"
            >
              Request Access <Send size={24} />
            </a>
         </div>
         <div className="grid grid-cols-1 gap-12">
            <CommunityFeature 
              icon={<Shield size={24} />} 
              label="Guidelines" 
              detail="Zero noise policy. High intellectual rigor. Professional exclusivity." 
            />
            <CommunityFeature 
              icon={<Users size={24} />} 
              label="Onboarding" 
              detail="Mandatory intro for new practitioners. Identify core practice areas." 
            />
            <CommunityFeature 
              icon={<MessageSquare size={24} />} 
              label="Engagement" 
              detail="Direct line to program directors and foundational researchers." 
            />
         </div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-60 border-x border-t border-foreground/5 flex flex-col items-center justify-center bg-dot-pattern">
         <div className="text-center">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none text-foreground">JOIN THE <br /> DISCOURSE</h2>
            <p className="text-foreground/40 max-w-xl mx-auto mb-12 font-bold text-lg">
               Secure your position in the architectural master-group. 
               Entry is manual and review-based.
            </p>
            <a href="https://t.me/thethinkingarchitect" className="btn-outline px-20 text-xl py-6">
               Enter The Hub
            </a>
         </div>
      </section>
    </div>
  );
}

function CommunityFeature({ icon, label, detail }: { icon: React.ReactNode, label: string, detail: string }) {
  return (
    <div className="flex gap-8 group">
       <div className="w-16 h-16 bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent/5 transition-all">
          <div className="text-foreground/40 group-hover:text-accent transition-all">
            {icon}
          </div>
       </div>
       <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-accent transition-all text-foreground">{label}</h3>
          <p className="text-foreground/40 text-sm leading-relaxed max-w-sm">{detail}</p>
       </div>
    </div>
  );
}
