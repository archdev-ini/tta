import { getProgramBySlug, getAllPrograms } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import ProgramLayout from "@/components/layout/ProgramLayout";
import { notFound } from "next/navigation";
import { Lock, Send, ArrowLeft, ArrowRight } from "lucide-react";
import GlitchText from "@/components/ui/GlitchText";
import { ModuleBadge } from "@/components/ui/ModuleBadge";
import Link from 'next/link';

const components = {
  GlitchText,
  ModuleBadge,
  Lock,
  Send,
  ArrowLeft,
  ArrowRight,
  Link,
};

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  
  if (!program) {
    notFound();
  }
  
  return (
    <ProgramLayout 
      title={program.frontmatter.title?.replace(/<CurrentYear \/>/g, new Date().getFullYear().toString())} 
      label={program.frontmatter.label?.replace(/<CurrentYear \/>/g, new Date().getFullYear().toString())}
      icon={program.frontmatter.featured ? Lock : undefined}
    >
      <MDXRemote source={program.content} components={components} />
    </ProgramLayout>
  );
}

export async function generateStaticParams() {
  const programs = await getAllPrograms();
  return programs.map((program) => ({
    slug: program.slug,
  }));
}
