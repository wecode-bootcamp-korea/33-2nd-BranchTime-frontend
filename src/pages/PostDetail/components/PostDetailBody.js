import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import styled from 'styled-components';

const PostDetailBody = ({ data }) => {
  return (
    <>
      {data.map(({ post_id, post_content }) => (
        <PostDetailBodyWarpper key={post_id}>
          <MDEditor.Markdown source={post_content} />
        </PostDetailBodyWarpper>
      ))}
    </>
  );
};

export default PostDetailBody;

const PostDetailBodyWarpper = styled.section`
  width: 43.75rem;
  margin: 3.125rem auto;
`;
