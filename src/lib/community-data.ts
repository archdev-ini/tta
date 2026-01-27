export interface CommunityHighlight {
    id: string;
    text: string;
    type: "speaker" | "news" | "recap";
    link?: string;
    image?: string;
    isActive: boolean;
    expiryDate?: Date;
}

// Mock Strapi Response
const MOCK_HIGHLIGHTS: CommunityHighlight[] = [
    {
        id: "1",
        text: "NEW SPEAKER ANNOUNCED: Sarah Williams on 'Computational Landscapes' // FEB 20",
        type: "speaker",
        link: "/events",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        isActive: true
    },
    {
        id: "2",
        text: "COMMUNITY MILESTONE: 500+ Architects Joined the 'Systems Thinking' Workshop",
        type: "news",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&auto=format&fit=crop",
        isActive: true
    },
    {
        id: "3",
        text: "RECAP: Watch the 'Future of Form' keynote on our Media page now",
        type: "recap",
        link: "/media",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop",
        isActive: true
    },
    {
        id: "4",
        text: "REMINDER: Portfolio Review submissions close this Friday",
        type: "news",
        isActive: true,
        expiryDate: new Date("2026-03-01") // Future date, still active
    }
];

export async function getCommunityHighlights(): Promise<CommunityHighlight[]> {
    // simulation of API latency
    // await new Promise(resolve => setTimeout(resolve, 100));

    const now = new Date();

    return MOCK_HIGHLIGHTS.filter(item => {
        if (!item.isActive) return false;
        if (item.expiryDate && item.expiryDate < now) return false;
        return true;
    });
}
