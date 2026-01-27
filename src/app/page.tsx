import { getGlobalSettings } from "@/lib/mdx";
import HomeClient from "@/components/home/HomeClient";
import { getCommunityHighlights } from "@/lib/community-data";

export default async function Home() {
  const settings = await getGlobalSettings();
  const highlights = await getCommunityHighlights();

  return (
    <HomeClient
      marqueeText={settings?.marqueeText || "THE THINKING ARCHITECT // MASTERCLASS // 2026 // JOIN THE COMMUNITY"}
      highlights={highlights}
    />
  );
}
