import React from 'react';
import PostListHeader from './components/PostListHeader';
import PostListBody from './components/PostListBody';
import Nav from '../../components/Nav/Nav';

const PostList = () => {
  return (
    <>
      <Nav />
      <PostListHeader />
      <PostListBody />
    </>
  );
};

export default PostList;
