import { notFound } from "next/navigation";

export default function ProgramPage() {
  notFound();
}

export async function generateStaticParams() {
  return [];
}
