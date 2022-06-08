import React from 'react';
import styled from 'styled-components';

const PostRecommend = () => {
  return (
    <Aside>
      <RecommendTitle>추천 작가</RecommendTitle>
      <RecommendSearch>
        {RECOMMEND_LIST.map(({ id, imgSrc, name, writeCount, subscribe }) => (
          <RecommendItem key={id}>
            <RecommendImgBox>
              <img src={imgSrc} alt="임시 프로필" />
            </RecommendImgBox>
            <RecommendDetail>
              <RecommendText>{name}</RecommendText>
              <span>글 {writeCount}</span>
              <IcoDot />
              <span>구독자 {subscribe}</span>
            </RecommendDetail>
          </RecommendItem>
        ))}
      </RecommendSearch>
    </Aside>
  );
};

export default PostRecommend;

const RECOMMEND_LIST = [
  {
    id: 1,
    imgSrc: '/images/bread.png',
    name: '러블리 김작가',
    writeCount: 94,
    subscribe: 18,
  },
  {
    id: 2,
    imgSrc: '/images/bread.png',
    name: '기린아빠',
    writeCount: 100,
    subscribe: 400,
  },
  {
    id: 3,
    imgSrc: '/images/bread.png',
    name: 'Lemon',
    writeCount: 158,
    subscribe: 230,
  },
  {
    id: 4,
    imgSrc: '/images/bread.png',
    name: 'WECODE',
    writeCount: 554,
    subscribe: 94,
  },
  {
    id: 5,
    imgSrc: '/images/bread.png',
    name: 'WECODE',
    writeCount: 554,
    subscribe: 94,
  },
  {
    id: 6,
    imgSrc: '/images/bread.png',
    name: 'WECODE',
    writeCount: 554,
    subscribe: 94,
  },
];

const Aside = styled.aside`
  width: 13.75rem;
  padding: ${({ theme }) => theme.paddings.xl};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const RecommendTitle = styled.strong`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: normal;
  line-height: 0.813rem;
  color: ${({ theme }) => theme.colors.black};
`;

const RecommendItem = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.margins.large};

  &:nth-child(1) {
    margin-top: 0;
  }
`;

const RecommendSearch = styled.div`
  max-height: 18.375rem;
  padding: ${({ theme }) => theme.paddings.large} 0 0;
`;

const RecommendImgBox = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  margin-right: ${({ theme }) => theme.margins.large};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const RecommendDetail = styled.div`
  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.125rem;
    color: ${({ theme }) => theme.colors.middleGray};
  }
`;

const RecommendText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;

const IcoDot = styled.span`
  display: inline-block;
  width: 0.125rem;
  height: 0.125rem;
  margin: ${({ theme }) => theme.margins.base}
    ${({ theme }) => theme.margins.small} 0;
  vertical-align: top;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;
