import { getAllPosts } from './api';
import { cache } from 'react';

export const getData = cache(() => {
  const allPosts = getAllPosts();
  return allPosts;
});
