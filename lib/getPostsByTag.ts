import { cache } from 'react';
import { getAllPosts } from './api';

export const getPostsByTag = cache((tag: string) => {
  const allPosts = getAllPosts(tag);
  return allPosts;
});
