import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostDetailHead from './components/PostDetailHead';
import PostDetailBody from './components/PostDetailBody';
import PostDetailComment from './components/PostDetailComment';
import PostDetailUserProfile from './components/PostDetailUserProfile';
import PostDetailRecommend from './components/PostDetailRecommend';
import { BASE_URL } from '../../config';

const PostDetail = () => {
  const [data, setData] = useState({});
  // const [comment, setComment] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}contents/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setData(data.message);
        // setComment(data.message[0]);
      });
  }, [params.id]);

  const isDataEmpty = Object.keys(data).length === 0;

  if (isDataEmpty) return <>loading...</>;

  return (
    <>
      <PostDetailHead data={data} />
      <PostDetailBody data={data} />
      <PostDetailComment />
      <PostDetailUserProfile data={data} />
      <PostDetailRecommend />
    </>
  );
};

export default PostDetail;
