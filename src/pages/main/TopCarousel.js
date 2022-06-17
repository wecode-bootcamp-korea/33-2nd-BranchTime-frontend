import React, { useEffect, useState } from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import styled from 'styled-components';
import Slider from 'react-slick';
import arrayShuffle from 'array-shuffle';
import { BASE_URL } from '../../config';

const TopCarousel = () => {
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    prevArrow: <GrLinkPrevious />,
    nextArrow: <GrLinkNext />,
    appendDots: dots => (
      <DotsDiv>
        <ul> {dots} </ul>
      </DotsDiv>
    ),
    customPaging: i => <CustomPaging>0{i + 1}</CustomPaging>,
  };

  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}contents/postlist/all`)
      .then(res => res.json())
      .then(data => {
        setCarousel(data.result);
      });
  }, []);
  return (
    <StyledSlider {...settings}>
      {arrayShuffle(carousel).map(slide => {
        const { id, name, carousel, bglomg, desc } = slide;
        return (
          <SliderWrapper key={id}>
            <div>
              <FirstDiv bgImg={bglomg}>
                <CarouselSpan>{name}</CarouselSpan>
                <CarouselDesc>by {desc}</CarouselDesc>
              </FirstDiv>
            </div>
            <SecondDiv>
              {carousel.map(({ id, name, bglmg }) => {
                return (
                  <CarouselInnerDiv key={id} bgImg={bglmg}>
                    <CarouselSpan>{name}</CarouselSpan>
                    <CarouselDesc>by {desc}</CarouselDesc>
                    {/* <Carouseldesc>{desc}</Carouseldesc> */}
                  </CarouselInnerDiv>
                );
              })}
            </SecondDiv>
          </SliderWrapper>
        );
      })}
    </StyledSlider>
  );
};

export default TopCarousel;

const CarouselInnerDiv = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  flex-direction: column;
  transition: all 0.3s linear;
  overflow: hidden;
  position: relative;
  width: 50%;

  &::before {
    content: '';
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const FirstDiv = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  flex-direction: column;
  transition: all 0.3s linear;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  height: 15rem;
  overflow: hidden;
`;

const DotsDiv = styled.div`
  margin-top: 0.625rem;
  padding-left: 0.313rem;
`;

const CustomPaging = styled.div`
  margin-top: 0.625rem;
  font-size: 0.75rem;
  width: 1.25rem;
  color: black;
`;

const CarouselSpan = styled.span`
  ${theme => theme.theme.flex.flexBox()}
  width: 31.25rem;
  height: 4.375rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.875rem;
  text-align: center;
  position: relative;
`;

const CarouselDesc = styled.span`
  ${theme => theme.theme.flex.flexBox()}
  width: 12.5rem;
  height: 1.875rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 0.625rem;
  font-size: 1.25rem;
  text-align: center;
  position: relative;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
`;

const StyledSlider = styled(Slider)`
  width: 80rem;
  height: 30rem;

  .slick-slide slick-active slick-center slick-current {
    height: 100%;
    overflow: hidden;
  }

  .slick-dots {
    .slick-active {
      font-weight: bolder;
      border-bottom: 0.063rem solid black;
    }
  }
`;

const SecondDiv = styled.div`
  display: flex;
  height: 15rem;
  overflow: hidden;
  .div {
    width: 580px;
  }
`;

const SliderWrapper = styled.div`
  height: 30rem;
  overflow: hidden;
`;

// const MAIN_SLIDER = [
//   {
//     id: 1,
//     name: '파리의 시간을 사는 중이라 전해',
//     desc: '행갬',
//     bgImg: 'images/Carousel/carousel1.jpeg',
//     carousel: [
//       {
//         id: 1,
//         name: '마블은 죽었다',
//         bgImg: 'images/Carousel/carousel2.jpeg',
//         desc: '행갬',
//       },
//       {
//         id: 2,
//         name: '블루 스컬에 대한 고찰',
//         bgImg: 'images/Carousel/carousel3.jpeg',
//         desc: '행갬',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: '닥터 스트레인지는 법사인가 잡캐인가',
//     bgImg: 'images/Carousel/carousel4.jpeg',
//     desc: '행갬',
//     carousel: [
//       {
//         id: 1,
//         name: '타농부의 당근 농사법',
//         bgImg: 'images/Carousel/carousel5.jpeg',
//         desc: '행갬',
//       },
//       {
//         id: 2,
//         name: '아이엠 그루트',
//         bgImg: 'images/Carousel/carousel6.jpeg',
//         desc: '행갬',
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: '아이엠 그루트',
//     bgImg: 'images/Carousel/carousel7.png',
//     desc: '행갬',
//     carousel: [
//       {
//         id: 1,
//         name: '연탄이 커여어',
//         bgImg: 'images/Carousel/carousel8.jpeg',
//         desc: '행갬',
//       },
//       {
//         id: 2,
//         name: '룰루레몬 한국 사이트에 대하여',
//         bgImg: 'images/Carousel/carousel9.jpg',
//         desc: '행갬',
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: '푸틴은 왜 용인대 명예 박사를 받았는가',
//     bgImg: 'images/Carousel/carousel10.jpg',
//     desc: '행갬',
//     carousel: [
//       {
//         id: 1,
//         name: '집에 가고 싶다',
//         bgImg: 'images/Carousel/carousel11.jpg',
//         desc: '행갬',
//       },
//       {
//         id: 2,
//         name: '마블은 살았다',
//         bgImg: 'images/Carousel/carousel12.jpg',
//         desc: '행갬',
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: 'article1',
//     carousel: [
//       {
//         id: 1,
//         name: 'article2',
//       },
//       {
//         id: 2,
//         name: 'article3',
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: 'article1',
//     carousel: [
//       {
//         id: 1,
//         name: 'article2',
//       },
//       {
//         id: 2,
//         name: 'article3',
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: 'article1',
//     carousel: [
//       {
//         id: 1,
//         name: 'article2',
//       },
//       {
//         id: 2,
//         name: 'article3',
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: 'article1',
//     carousel: [
//       {
//         id: 1,
//         name: 'article2',
//       },
//       {
//         id: 2,
//         name: 'article3',
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: 'article1',
//     carousel: [
//       {
//         id: 1,
//         name: 'article2',
//       },
//       {
//         id: 2,
//         name: 'article3',
//       },
//     ],
//   },
// ];
