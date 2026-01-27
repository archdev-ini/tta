import { queryStrapi, getStrapiMedia } from "./strapi";

export interface CommunityHighlight {
    id: string;
    text: string;
    type: "speaker" | "news" | "recap";
    link?: string;
    image?: string;
    isActive: boolean;
    expiryDate?: string; // Datetime from Strapi is a string
}

export async function getCommunityHighlights(): Promise<CommunityHighlight[]> {
    const response = await queryStrapi("/highlights?populate=image", {
        next: { revalidate: 3600 }
    });

    if (!response || !Array.isArray(response)) {
        return [];
    }

    const now = new Date();

    const mappedItems = response.map((item: any) => {
        const attrs = item.attributes || item;
        return {
            id: item.id.toString(),
            text: attrs.text,
            type: attrs.type,
            link: attrs.link,
            isActive: attrs.isActive,
            expiryDate: attrs.expiryDate,
            image: getStrapiMedia(attrs.image) || undefined
        };
    });

    console.log(`[Strapi] Mapped Highlights:`, mappedItems);
    return mappedItems;
}
