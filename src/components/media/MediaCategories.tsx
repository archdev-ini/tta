import Link from "next/link";
import { getChannelPlaylists } from "@/lib/youtube";

export default async function MediaCategories({ activeId }: { activeId?: string }) {
    const playlists = await getChannelPlaylists();

    const allPlaylists = [
        { id: "all", title: "All Content", itemCount: 0 },
        ...playlists
    ];

    return (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full max-w-[1600px] px-6">
            {allPlaylists.map(p => {
                const isActive = activeId === p.id || (!activeId && p.id === "all");
                return (
                    <Link
                        key={p.id}
                        href={p.id === "all" ? "/media" : `/media?playlistId=${p.id}`}
                        className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${isActive ? "bg-accent text-black border-accent" : "bg-foreground/5 text-foreground/60 border-foreground/5 hover:border-foreground/20 hover:text-foreground"}`}
                    >
                        {p.title}
                    </Link>
                )
            })}
        </div>
    )
}
