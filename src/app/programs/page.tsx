import { getAllPrograms } from "@/lib/mdx";
import ProgramCard from "@/components/programs/ProgramCard";

export default async function Programs() {
  const programs = await getAllPrograms();

  return (
    <div className="bg-background min-h-screen pt-20">
      <section className="max-w-[1600px] mx-auto px-6 py-20 border-x border-foreground/5">
        <div className="max-w-4xl mb-20">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-4 block">Section 03 / Programs</span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground mb-8">
            REFINED <br /> ARCHITECTURAL <br /> PATHS
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl font-medium">
            Long-term developmental programs designed for architects navigating education, practice, and professional identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/5 border border-foreground/5">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>
    </div>
  );
}
