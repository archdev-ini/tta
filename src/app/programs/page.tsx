import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import GlitchText from "@/components/ui/GlitchText";
import { getAllPrograms } from "@/lib/mdx";
import ProgramListClient from "@/components/programs/ProgramListClient";

export default async function Programs() {
  const programs = await getAllPrograms();

  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5">
        <div className="flex flex-col gap-6 max-w-4xl">
           <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Section 02 / Programs</span>
           <GlitchText as="h1" text="ACTIVE CURRICULUM" className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground" />
        </div>
      </section>

      <ProgramListClient programs={programs} />

      <section className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 flex flex-col items-center text-center bg-dot-pattern">
         <div className="max-w-xl mx-auto">
           <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 text-foreground">Access Verification</h2>
           <p className="text-foreground/40 mb-10 leading-relaxed">
             Certain intensives require community verification. Join the TTA Telegram to initiate the onboarding process.
           </p>
           <Link href="https://t.me/thethinkingarchitect" className="btn-outline px-12 transition-colors">
              Inquire via Hub
           </Link>
         </div>
      </section>
    </div>
  );
}
