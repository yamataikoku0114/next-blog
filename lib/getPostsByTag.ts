import { cache } from 'react';
import { getAllPosts } from './api';

export const getPostsByTag = cache((tag: string) => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags'], tag);
  console.log('allPosts', allPosts);
  return allPosts;
});
