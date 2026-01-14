import { getGlobalSettings } from "@/lib/mdx";
import HomeClient from "@/components/home/HomeClient";

export default async function Home() {
  const settings = await getGlobalSettings();
  
  return (
    <HomeClient 
      marqueeText={settings?.marqueeText || "THE THINKING ARCHITECT // MASTERCLASS // 2026 // JOIN THE COMMUNITY"} 
    />
  );
}
