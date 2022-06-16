import React, { useEffect, useState } from 'react';
import PostDetailHead from './components/PostDetailHead';
import PostDetailBody from './components/PostDetailBody';
import PostDetailComment from './components/PostDetailComment';
import PostDetailUserProfile from './components/PostDetailUserProfile';
import PostDetailRecommend from './components/PostDetailRecommend';

const PostDetail = () => {
  const [data, setData] = useState({});
  const [comment, setComment] = useState({});

  useEffect(() => {
    fetch('http:///10.58.1.170:8001/contents/53')
      .then(res => res.json())
      .then(data => {
        setData(data.message);
        setComment(data.message[0]);
      });
  }, []);

  const isDataEmpty = Object.keys(data).length === 0;

  if (isDataEmpty) return <>loading...</>;

  return (
    <>
      <PostDetailHead data={data} />
      <PostDetailBody data={data} />
      <PostDetailComment data={comment.comment_information} />
      <PostDetailUserProfile data={data} />
      <PostDetailRecommend />
    </>
  );
};

export default PostDetail;
