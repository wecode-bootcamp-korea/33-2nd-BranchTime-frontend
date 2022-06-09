import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';
import PostRecommend from './PostRecommend';

const PostListBody = () => {
  return (
    <Body>
      <Wrapper>
        <Ui>
          <PostListItem />
        </Ui>
        <PostRecommend />
      </Wrapper>
    </Body>
  );
};

export default PostListBody;

const Body = styled.main`
  padding: 1.875rem 0 6.938rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const Wrapper = styled.section`
  display: flex;
  width: 58.75rem;
  margin: 0 auto;
`;

const Ui = styled.ul`
  width: 43.75rem;
  margin-right: ${({ theme }) => theme.margins.large};
`;
