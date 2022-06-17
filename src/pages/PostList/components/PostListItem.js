import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../../config';

const PostListItem = () => {
  const [postList, setPostList] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}contents/postlist/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setPostList(data.post_list);
      });
  }, [params.id]);

  const onClickMove = id => {
    navigate(`/post_detail/${id}`);
  };

  return (
    <div>
      {postList.post_list &&
        postList.post_list.map(([post]) => (
          <Li key={post.post_id} onClick={() => onClickMove(post.post_id)}>
            <ImgItemWrap>
              <ItemDesc>
                <Title>{post.post_title}</Title>
                <DescWarp>
                  <em>{post.post_subTitle}</em>
                  <IconBar />
                  <span>{post.desc}</span>
                </DescWarp>
                <SubDesc>
                  <span>댓글 {post.commentCount}</span>
                  <IcoDot />
                  <span>작성 시간 {post.writeTime}</span>
                  <IcoDot />
                  <span>by {post.writeUser}</span>
                </SubDesc>
              </ItemDesc>
              {post.imgSrc ? (
                <ItemImgBox>
                  <img src={post.imgSrc} alt="임시사진" />
                </ItemImgBox>
              ) : null}
            </ImgItemWrap>
          </Li>
        ))}
    </div>
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
