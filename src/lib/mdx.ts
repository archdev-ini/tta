import { queryStrapi, getStrapiMedia } from "./strapi";

export async function getGlobalSettings() {
  const endpoints = [
    "/global-setting",
    "/global-settings",
    "/global_setting",
    "/globalsetting",
    "/globalsettings"
  ];

  for (const endpoint of endpoints) {
    const response = await queryStrapi(endpoint, {
      next: { revalidate: 0 }
    });
    if (response) {
      console.log(`[Strapi] SUCCESS: Found global settings at ${endpoint}`);
      const attrs = response.attributes || response;
      return {
        ...attrs,
        defaultSeoImage: getStrapiMedia(attrs.defaultSeoImage)
      };
    }
  }

  return null;
}

export async function getAllPrograms() {
  const response = await queryStrapi("/programs?populate=image,seoImage", {
    next: { revalidate: 3600 }
  });

  if (!response || !Array.isArray(response)) return [];

  return response.map((item: any) => {
    const attrs = item.attributes || item; // Handle both flat and nested structure
    return {
      slug: attrs.slug,
      title: attrs.title,
      label: attrs.label,
      status: attrs.status,
      featured: attrs.featured,
      description: attrs.description,
      image: getStrapiMedia(attrs.image),
      seoTitle: attrs.seoTitle,
      seoDescription: attrs.seoDescription,
      seoImage: getStrapiMedia(attrs.seoImage)
    };
  });
}

export async function getProgramBySlug(slug: string) {
  const response = await queryStrapi(`/programs?filters[slug][$eq]=${slug}&populate=image,seoImage`, {
    next: { revalidate: 3600 }
  });

  if (!response || !Array.isArray(response) || response.length === 0) return null;

  const item = response[0];
  const attrs = item.attributes || item;

  return {
    slug: attrs.slug,
    title: attrs.title,
    label: attrs.label,
    status: attrs.status,
    featured: attrs.featured,
    description: attrs.description,
    content: attrs.content,
    image: getStrapiMedia(attrs.image),
    seoTitle: attrs.seoTitle,
    seoDescription: attrs.seoDescription,
    seoImage: getStrapiMedia(attrs.seoImage)
  };
}
