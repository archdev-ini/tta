"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { useDebounce } from "use-debounce";

export default function MediaSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [text, setText] = useState(searchParams.get("q") || "");
    const [query] = useDebounce(text, 500);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (query) {
            params.set("q", query);
        } else {
            params.delete("q");
        }
        router.push(`/media?${params.toString()}`);
    }, [query, router, searchParams]);

    return (
        <div className="relative w-full max-w-xl group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-foreground/40 group-focus-within:text-accent transition-colors" />
            </div>
            <input
                type="text"
                className="w-full bg-foreground/5 border border-foreground/10 text-foreground text-sm rounded-full pl-10 pr-10 py-3 focus:outline-none focus:border-accent/50 focus:bg-foreground/10 transition-all font-medium placeholder:text-foreground/30"
                placeholder="Search for topics, keywords..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {text && (
                <button
                    onClick={() => setText("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-foreground/40 hover:text-foreground transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}
