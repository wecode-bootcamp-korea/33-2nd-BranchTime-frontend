import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const PostListBody = () => {
  return (
    <Body>
      <Wrapper>
        {/* post list */}
        <ul>
          <PostListItem />
        </ul>

        {/* post list */}
        <aside>추천 작가</aside>
      </Wrapper>
    </Body>
  );
};

export default PostListBody;

const Body = styled.main`
  padding: 1.875rem 0 6.938rem;
  width: 100%;
  height: 100vh;
  background-color: ${theme => theme.theme.colors.bgGray};
`;

const Wrapper = styled.section`
  width: 58.75rem;
  margin: 0 auto;
`;
