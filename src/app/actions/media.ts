"use server";

import { getLatestVideos, Video, PaginatedResult } from "@/lib/youtube";

export async function fetchMoreVideos(playlistId: string, pageToken: string): Promise<PaginatedResult<Video>> {
    return await getLatestVideos(playlistId, pageToken);
}
