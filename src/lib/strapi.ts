const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Helper to fetch data from Strapi
 * @param endpoint - The API endpoint (e.g., /programs)
 * @param options - Fetch options (including next.revalidate)
 */
export async function queryStrapi(endpoint: string, options: RequestInit = {}) {
    if (!STRAPI_TOKEN) {
        console.warn(`[Strapi] Missing STRAPI_API_TOKEN. Fetching from ${endpoint} will likely fail.`);
    }

    const url = `${STRAPI_URL}/api${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

    try {
        const res = await fetch(url, {
            ...options,
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
                "Content-Type": "application/json",
                ...options.headers,
            },
        });

        if (!res.ok) {
            if (res.status === 404) {
                console.warn(`[Strapi] Endpoint not found (404): ${endpoint}`);
                return null;
            }
            const error = await res.json().catch(() => ({}));
            console.error(`[Strapi] HTTP Error ${res.status}:`, error);
            throw new Error(`Strapi API Error: ${res.status} ${res.statusText}`);
        }

        const json = await res.json();

        // Strapi v5 often returns { data: [...] } or { data: { ... } }
        const data = json.data || json;

        console.log(`[Strapi] Fetched ${endpoint}:`, {
            count: Array.isArray(data) ? data.length : 1,
            sample: Array.isArray(data) ? data[0]?.id : data?.id
        });

        return data;
    } catch (error) {
        console.error(`[Strapi] Fetch failed for ${endpoint}:`, error);
        return null;
    }
}

/**
 * Flattens Strapi v4/v5 media objects to a simple URL string
 */
export function getStrapiMedia(media: any): string | null {
    if (!media) return null;
    const url = media.url || media.data?.attributes?.url || media.attributes?.url;
    if (!url) return null;
    if (url.startsWith("/")) return `${STRAPI_URL}${url}`;
    return url;
}
