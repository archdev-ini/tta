import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROGRAMS_PATH = path.join(process.cwd(), 'src/content/programs');

export async function getProgramBySlug(slug: string) {
  const fullPath = path.join(PROGRAMS_PATH, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontmatter: data,
    content,
  };
}

export async function getAllPrograms() {
  const files = fs.readdirSync(PROGRAMS_PATH);
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(PROGRAMS_PATH, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        ...data,
      };
    });
}

export async function getGlobalSettings() {
  const fullPath = path.join(process.cwd(), 'src/content/settings/globals.mdx');
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  
  return data;
}
