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
//     name: '????????? ????????? ?????? ????????? ??????',
//     desc: '??????',
//     bgImg: 'images/Carousel/carousel1.jpeg',
//     carousel: [
//       {
//         id: 1,
//         name: '????????? ?????????',
//         bgImg: 'images/Carousel/carousel2.jpeg',
//         desc: '??????',
//       },
//       {
//         id: 2,
//         name: '?????? ????????? ?????? ??????',
//         bgImg: 'images/Carousel/carousel3.jpeg',
//         desc: '??????',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: '?????? ?????????????????? ???????????? ????????????',
//     bgImg: 'images/Carousel/carousel4.jpeg',
//     desc: '??????',
//     carousel: [
//       {
//         id: 1,
//         name: '???????????? ?????? ?????????',
//         bgImg: 'images/Carousel/carousel5.jpeg',
//         desc: '??????',
//       },
//       {
//         id: 2,
//         name: '????????? ?????????',
//         bgImg: 'images/Carousel/carousel6.jpeg',
//         desc: '??????',
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: '????????? ?????????',
//     bgImg: 'images/Carousel/carousel7.png',
//     desc: '??????',
//     carousel: [
//       {
//         id: 1,
//         name: '????????? ?????????',
//         bgImg: 'images/Carousel/carousel8.jpeg',
//         desc: '??????',
//       },
//       {
//         id: 2,
//         name: '???????????? ?????? ???????????? ?????????',
//         bgImg: 'images/Carousel/carousel9.jpg',
//         desc: '??????',
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: '????????? ??? ????????? ?????? ????????? ????????????',
//     bgImg: 'images/Carousel/carousel10.jpg',
//     desc: '??????',
//     carousel: [
//       {
//         id: 1,
//         name: '?????? ?????? ??????',
//         bgImg: 'images/Carousel/carousel11.jpg',
//         desc: '??????',
//       },
//       {
//         id: 2,
//         name: '????????? ?????????',
//         bgImg: 'images/Carousel/carousel12.jpg',
//         desc: '??????',
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
