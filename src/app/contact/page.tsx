import GlitchText from "@/components/ui/GlitchText";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5">
        <div className="flex flex-col gap-6 max-w-4xl text-left">
           <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Section 06 / Correspondence</span>
           <GlitchText as="h1" text="DIRECT CONTACT" className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground" />
        </div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 grid grid-cols-1 md:grid-cols-2">
         <div className="p-20 border-r border-foreground/5 group hover:bg-foreground/5 transition-all">
            <Mail size={40} className="text-accent mb-12" />
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 text-foreground">Official Inquiries</h3>
            <p className="text-foreground/40 mb-10 max-w-sm">For partnerships and program details.</p>
            <a href="mailto:contact@tta.foundation" className="text-2xl font-black uppercase tracking-widest hover:text-accent transition-all border-b-2 border-accent/20 hover:border-accent pb-2 inline-block text-foreground">
               contact@tta.foundation
            </a>
         </div>

         <div className="p-20 group hover:bg-foreground/5 transition-all">
            <Send size={40} className="text-accent mb-12" />
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 text-foreground">Community Auth</h3>
            <p className="text-foreground/40 mb-10 max-w-sm">For faster, human-based verification and access requests.</p>
            <a href="https://t.me/tta_admin" className="text-2xl font-black uppercase tracking-widest hover:text-accent transition-all border-b-2 border-accent/20 hover:border-accent pb-2 inline-block text-foreground">
               @tta_admin
            </a>
         </div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">
         <span>Foundation</span>
         <span>Global Network // <span className="font-logo">TTA</span></span>
      </section>
    </div>
  );
}
