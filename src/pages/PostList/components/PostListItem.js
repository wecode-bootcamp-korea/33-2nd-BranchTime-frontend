import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostListItem = () => {
  const [writeList, setWriteList] = useState([]);

  useEffect(() => {
    fetch('/data/WRITE_LIST.json')
      .then(response => response.json())
      .then(data => setWriteList(data));
  }, []);

  const fetchData = () => {
    fetch('/data/WRITE_LIST.json')
      .then(res => res.json())
      .then(data => setWriteList([...writeList, ...data]));
  };

  return (
    <InfiniteScroll
      dataLength={writeList.length}
      next={fetchData}
      hasMore={true}
    >
      {writeList.map(
        ({
          id,
          title,
          subTitle,
          desc,
          commentCount,
          writeTime,
          wirteUser,
          imgSrc,
        }) => (
          <Li key={id}>
            <ImgItemWrap>
              <ItemDesc>
                <Title>{title}</Title>
                <DescWarp>
                  <em>{subTitle}</em>
                  <IconBar />
                  <span>{desc}</span>
                </DescWarp>
                <SubDesc>
                  <span>댓글 {commentCount}</span>
                  <IcoDot />
                  <span>{writeTime}시간 전</span>
                  <IcoDot />
                  <span>by {wirteUser}</span>
                </SubDesc>
              </ItemDesc>
              {imgSrc ? (
                <ItemImgBox>
                  <img src={imgSrc} alt="임시사진" />
                </ItemImgBox>
              ) : null}
            </ImgItemWrap>
          </Li>
        )
      )}
    </InfiniteScroll>
  );
};

export default PostListItem;

const Li = styled.li`
  max-height: 11.25rem;
  height: 11.25rem;
  margin-top: ${({ theme }) => theme.margins.large};
  padding: 1.875rem ${({ theme }) => theme.paddings.xl};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.313rem;
  color: #666;
  border-bottom: ${({ theme }) => theme.borders.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

const ImgItemWrap = styled.div`
  display: flex;
`;

const ItemDesc = styled.div`
  flex-grow: 1;
`;

const Title = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const DescWarp = styled.div`
  overflow: hidden;
  padding-top: 0.625rem;
  height: 3rem;
  line-height: 1.3rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const SubDesc = styled.div`
  overflow: hidden;
  display: block;
  padding-top: ${({ theme }) => theme.paddings.xl};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const IconBar = styled.span`
  display: inline-block;
  width: 0.063rem;
  height: 0.688rem;
  margin: ${({ theme }) => theme.margins.small}
    ${({ theme }) => theme.margins.base} 0;
  vertical-align: top;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

const IcoDot = styled.span`
  display: inline-block;
  width: 0.125rem;
  height: 0.125rem;
  margin: ${({ theme }) => theme.margins.base}
    ${({ theme }) => theme.margins.small} 0;
  vertical-align: text-top;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

const ItemImgBox = styled.div`
  flex-shrink: 0;
  width: 7.5rem;
  height: 7.5rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  margin-left: ${({ theme }) => theme.margins.large};

  img {
    width: 100%;
    height: 100%;
  }
`;
