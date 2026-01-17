import { getAllPrograms } from "@/lib/mdx";
import ProgramListClient from "@/components/programs/ProgramListClient";
import ProgramsHeader from "@/components/programs/ProgramsHeader";
import ProgramsFooter from "@/components/programs/ProgramsFooter";

export default async function Programs() {
  const programs = await getAllPrograms();

  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <ProgramsHeader />
      <ProgramListClient programs={programs} />
      <ProgramsFooter />
    </div>
  );
}
