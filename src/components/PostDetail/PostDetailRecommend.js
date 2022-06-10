import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PostDetailRecommend = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    fetch('/data/POST_RECOMMEND.json')
      .then(res => res.json())
      .then(data => setRecommend(data));
  }, []);

  return (
    <DetailRecomendSection>
      <Ul>
        {recommend.map(({ id, imgSrc, title, desc, userName }) => (
          <Li key={id}>
            <RecomendCard>
              <ImgBox>
                <img src={imgSrc} alt="임시사진" />
              </ImgBox>
              <Title>{title}</Title>
              <Desc>{desc}</Desc>
              <UserDesc>by {userName}</UserDesc>
            </RecomendCard>
          </Li>
        ))}
      </Ul>
    </DetailRecomendSection>
  );
};

export default PostDetailRecommend;

const DetailRecomendSection = styled.section`
  width: 75rem;
  margin: 0 auto;
`;

const Ul = styled.ul`
  ${({ theme }) => theme.flex.flexBox('', '', 'space-evenly')}
  flex-wrap: wrap;
`;

const Li = styled.li`
  width: 18.75rem;
  margin: 0 ${({ theme }) => theme.margins.xl} 2.188rem;
`;

const RecomendCard = styled.div``;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 10.625rem;
  background-color: black;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: 'NanumMyeongjo', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  margin-top: 1.625rem;
  color: #333;
`;

const Desc = styled.p`
  margin-top: ${({ theme }) => theme.margins.base};
  height: 4.125rem;
  line-height: 1.6;
  font-size: 0.813rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const UserDesc = styled.p`
  font-size: 0.813rem;
  margin-top: ${({ theme }) => theme.margins.large};
  color: #959595;
`;
