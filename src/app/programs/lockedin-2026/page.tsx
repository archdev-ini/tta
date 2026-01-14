import { Lock, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import GlitchText from "@/components/ui/GlitchText";

export default function Lockedin2026() {
  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5">
        <Link href="/programs" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground/40 hover:text-accent mb-20 transition-all">
          <ArrowLeft size={16} /> Back to Curriculum
        </Link>
        
        <div className="flex flex-col gap-6 max-w-6xl">
           <div className="flex items-center gap-4">
              <span className="p-2 border border-accent bg-accent/10">
                 <Lock size={24} className="text-accent" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Program / Restricted</span>
           </div>
           <GlitchText as="h1" text="LOCKEDIN // 2026" className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter text-foreground" />
        </div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 grid grid-cols-1 lg:grid-cols-2 gap-40">
         <div className="flex flex-col gap-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-foreground">Operational Update</h2>
            <div className="prose prose-2xl leading-relaxed text-foreground/50 font-medium">
               LockedIn 2026 is a multi-month immersion program focused on technical excellence, 
               philosophical rigor, and operational mastery. This is not a course; 
               it is an upgrade to your architectural operating system.
            </div>
         </div>

         <div className="flex flex-col gap-12">
            <div className="p-12 border border-foreground/5 bg-foreground/2 flex flex-col gap-8">
               <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Access Parameters</h3>
               <ul className="space-y-6">
                  <li className="flex gap-4">
                     <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                     <p className="text-lg text-foreground/60">Limited to 50 practitioners globally.</p>
                  </li>
                  <li className="flex gap-4">
                     <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                     <p className="text-lg text-foreground/60">Full curriculum data provided upon secure onboarding.</p>
                  </li>
                  <li className="flex gap-4">
                     <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                     <p className="text-lg text-foreground/60">Manual verification required for enrollment.</p>
                  </li>
               </ul>
               <a 
                 href="https://t.me/thethinkingarchitect"
                 className="btn-primary py-5 text-xl justify-center mt-4"
               >
                 Inquire via Telegram <Send size={20} />
               </a>
            </div>
         </div>
      </section>

      <div className="max-w-[1600px] w-full border-x border-t border-foreground/5 py-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-dot-pattern">
         <ModuleBadge title="Phase 01" label="Theoretical Foundations" />
         <ModuleBadge title="Phase 02" label="Technical Rigor" />
         <ModuleBadge title="Phase 03" label="Operational mastery" />
         <ModuleBadge border={false} title="Phase 04" label="Absolute Mastery" />
      </div>
    </div>
  );
}

function ModuleBadge({ title, label, border = true }: { title: string, label: string, border?: boolean }) {
  return (
    <div className={`p-12 flex flex-col gap-2 ${border ? 'border-b md:border-r border-foreground/5' : ''}`}>
       <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">{title}</span>
       <span className="text-2xl font-black uppercase tracking-tighter leading-tight text-foreground">{label}</span>
    </div>
  );
}
