import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export const postFiles = fs.readdirSync(postsDir);

export function getPostData(fileIdentifier) {
  const postSlug = fileIdentifier.replace(/\.md$/, '');

  const fileName = `${postSlug}.md`;

  const filePath = path.join(process.cwd(), 'posts', fileName);

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
