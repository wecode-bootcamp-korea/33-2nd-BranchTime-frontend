import React, { useEffect, useState } from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import Slider from 'react-slick';
import styled from 'styled-components';
import arrayShuffle from 'array-shuffle';
import { BASE_URL } from '../../config';

const RecommendCarousel = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}contents/postlist/search`)
      .then(res => res.json())
      .then(data => setRecommend(data.list));
  }, []);

  const recommendSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScoll: 5,
    centerMode: true,
    dots: true,
    centerPadding: '60px',
    className: 'center',
    prevArrow: <GrLinkPrevious />,
    nextArrow: <GrLinkNext />,
  };
  return (
    <RecommendSlider {...recommendSettings}>
      {arrayShuffle(recommend).map(list => {
        const { post_id, post_Thumbnail, post_title, post_content, writeUser } =
          list;
        return (
          <RecommendDiv key={post_id}>
            <RecommendImg src={post_Thumbnail} alt="recommend" />
            <RecommendTitle>{post_title}</RecommendTitle>
            <RecommendBody>{post_content}</RecommendBody>
            <RecommendAuthor>by {writeUser}</RecommendAuthor>
          </RecommendDiv>
        );
      })}
    </RecommendSlider>
  );
};

export default RecommendCarousel;

const RecommendDiv = styled.div`
  height: 36.031rem;
  cursor: pointer;
`;

const RecommendImg = styled.img`
  width: 15rem;
  height: 15rem;
`;

const RecommendSlider = styled(Slider)`
  width: 80rem;
  margin-top: 1.375rem;
`;
const RecommendTitle = styled.strong`
  font-weight: bold;
`;

const RecommendBody = styled.p`
  width: 15rem;
  color: #959595;
  font-size: 0.75rem;
  padding-top: 0.625rem;
`;

const RecommendAuthor = styled.span`
  color: #bfbfbf;
  font-size: 0.75rem;
  padding-top: 1.375rem;
  margin-top: 0.188rem;
`;
