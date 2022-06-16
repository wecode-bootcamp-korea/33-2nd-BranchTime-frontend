import React, { useEffect, useState } from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import Slider from 'react-slick';
import styled from 'styled-components';
import arrayShuffle from 'array-shuffle';

const RecommendCarousel = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.2.42:8000/contents/postlist/search`)
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

const RECOMMEND_LIST = [
  {
    id: 1,
    src: 'images/bread.png',
    title: 'Title1',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 2,
    src: 'images/bread.png',
    title: 'Title2',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 3,
    src: 'images/bread.png',
    title: 'Title3',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 4,
    src: 'images/bread.png',
    title: 'Title4',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 5,
    src: 'images/bread.png',
    title: 'Title5',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 6,
    src: 'images/bread.png',
    title: 'Title6',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 7,
    src: 'images/bread.png',
    title: 'Title7',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 8,
    src: 'images/bread.png',
    title: 'Title8',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 9,
    src: 'images/bread.png',
    title: 'Title9',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 10,
    src: 'images/bread.png',
    title: 'Title10',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
];
