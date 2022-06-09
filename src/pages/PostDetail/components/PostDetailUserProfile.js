import React from 'react';
import styled from 'styled-components';

const PostDetailUserProfile = ({ data }) => {
  return (
    <UserProfileWarpper>
      {data.map(
        ({
          id,
          post_user_name,
          post_subtitle,
          user_introduction,
          user_subscription_count,
        }) => (
          <Container key={id}>
            <Title>{post_user_name}</Title>
            <Desc>{post_subtitle}</Desc>
            <UserIntroduce>{user_introduction}</UserIntroduce>

            <UserProfile>
              <Img src="/images/bread.png" alt="임시프로필" />
            </UserProfile>

            <SubscribeWrap>
              <Subscribe>구독자 {user_subscription_count}</Subscribe>
              <Button>제안하기</Button>
            </SubscribeWrap>
          </Container>
        )
      )}
    </UserProfileWarpper>
  );
};

export default PostDetailUserProfile;

const UserProfileWarpper = styled.section`
  background-color: #fbfbfb;
`;

const Container = styled.div`
  position: relative;
  width: 43.75rem;
  margin: 50px auto;
  padding: 2rem 0 5rem 0;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: #333;
`;

const Desc = styled.p`
  color: #666;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.625rem;
`;
const UserIntroduce = styled.p`
  color: #666;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 1.313rem;
`;

const UserProfile = styled.div`
  position: absolute;
  top: -1.375rem;
  right: 0;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  background-color: #000;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

const SubscribeWrap = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'space-between')}
  margin-top: 2.125rem;
`;

const Subscribe = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #666;
`;

const Button = styled.button`
  padding-top: 0.063rem;
  width: 5rem;
  height: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.mint};
  background: ${({ theme }) => theme.colors.white};
  border: 0.063rem solid ${({ theme }) => theme.colors.mint};
  border-radius: 2.5rem;
  cursor: pointer;
`;
