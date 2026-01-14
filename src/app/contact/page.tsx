import GlitchText from "@/components/ui/GlitchText";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-28 lg:pt-40 pb-20 border-x border-foreground/5">
        <div className="flex flex-col gap-6 max-w-4xl text-left">
           <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Section 01 / Contact Information</span>
           <GlitchText as="h1" text="GET IN TOUCH" className="text-4xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground mb-8" />
           <div className="flex flex-col gap-6 text-xl text-foreground/60 max-w-2xl leading-relaxed font-medium">
             <p>
               The Thinking Architect welcomes thoughtful enquiries related to its programs, sessions, and institutional activities.
             </p>
             <p>
               We respond to messages that align with the purpose and structure of TTA.
             </p>
           </div>
        </div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5 grid grid-cols-1 lg:grid-cols-2 gap-20">
         <div className="flex flex-col gap-16">
            <ContactSection title="General Enquiries">
               <div className="flex flex-col gap-4 text-foreground/60 font-medium">
                 <p className="uppercase text-xs font-bold tracking-widest text-foreground/40 mb-2">For questions about:</p>
                 <ul className="list-disc pl-4 space-y-2 marker:text-accent">
                   <li>TTA programs and sessions</li>
                   <li>Events, tickets, and scheduling</li>
                   <li>Platform access and participation</li>
                 </ul>
                 <div className="mt-4 pt-4 border-t border-foreground/10">
                   <p className="text-sm uppercase tracking-widest text-foreground/40 mb-2">Please contact us at:</p>
                   <a href="mailto:thethinkingarchitect.africa@gmail.com" className="text-xl font-bold text-foreground hover:text-accent transition-colors">thethinkingarchitect.africa@gmail.com</a>
                 </div>
               </div>
            </ContactSection>

            <ContactSection title="Programs & Partnerships">
               <div className="flex flex-col gap-4 text-foreground/60 font-medium">
                 <p className="uppercase text-xs font-bold tracking-widest text-foreground/40 mb-2">For enquiries related to:</p>
                 <ul className="list-disc pl-4 space-y-2 marker:text-accent">
                   <li>Program collaborations</li>
                   <li>Institutional partnerships</li>
                   <li>Session or speaking proposals</li>
                 </ul>
                 <div className="mt-4 pt-4 border-t border-foreground/10">
                   <p className="text-sm uppercase tracking-widest text-foreground/40 mb-2">Please send a clear and concise message outlining the intent and relevance of your enquiry.</p>
                   <a href="mailto:thethinkingarchitect.africa@gmail.com" className="text-xl font-bold text-foreground hover:text-accent transition-colors">thethinkingarchitect.africa@gmail.com</a>
                 </div>
               </div>
            </ContactSection>
         </div>

         <div className="flex flex-col gap-16">
            <ContactSection title="Media & Press">
               <div className="flex flex-col gap-4 text-foreground/60 font-medium">
                 <p className="uppercase text-xs font-bold tracking-widest text-foreground/40 mb-2">For interviews, media features, or content-related enquiries:</p>
                 <a href="mailto:thethinkingarchitect.africa@gmail.com" className="text-xl font-bold text-foreground hover:text-accent transition-colors">thethinkingarchitect.africa@gmail.com</a>
               </div>
            </ContactSection>

            <ContactSection title="Community & Platforms">
               <div className="flex flex-col gap-4 text-foreground/60 font-medium">
                 <p className="uppercase text-xs font-bold tracking-widest text-foreground/40 mb-2">TTA operates across the following platforms:</p>
                 <ul className="flex flex-col gap-4">
                   <PlatformLink name="Telegram" desc="Community discussions and updates" href="https://t.me/thethinkingarchitect" />
                   <PlatformLink name="Luma" desc="Event listings and registration" href="https://luma.com/calendar/cal-zMvRPq81i5pG0LL" />
                   <PlatformLink name="YouTube" desc="Recorded talks and sessions" href="https://www.youtube.com/@TheThinkingArchitect-t4p" />
                 </ul>
                 <p className="text-sm italic mt-4 text-foreground/40">Access links are available via the site navigation.</p>
               </div>
            </ContactSection>

            <div className="mt-auto p-8 bg-foreground/5 border-l-2 border-accent">
              <h3 className="text-lg font-black uppercase tracking-tighter text-foreground mb-4">Response Policy</h3>
              <p className="text-foreground/60 font-medium mb-4">
                TTA is a curated institution. We prioritize clarity and relevance in all communication.
              </p>
              <p className="text-foreground/80 font-bold uppercase text-sm tracking-wide">
                Please allow 2–5 working days for a response.
              </p>
            </div>
         </div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">
         <span>Foundation</span>
         <span>Global Network // <span className="font-logo">TTA</span></span>
      </section>
    </div>
  );
}

function ContactSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">{title}</h2>
      {children}
    </div>
  );
}

function PlatformLink({ name, desc, href }: { name: string, desc: string, href: string }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-3 group">
        <span className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{name}</span>
        <span className="text-foreground/40 text-sm group-hover:text-foreground/60 transition-colors">— {desc}</span>
      </a>
    </li>
  );
}
