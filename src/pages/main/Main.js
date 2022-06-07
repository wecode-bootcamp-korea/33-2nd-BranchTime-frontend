import React from 'react';
import styled from 'styled-components';
import Footer from './footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { GiTreeBranch } from 'react-icons/gi';

const Main = () => {
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    prevArrow: <GrLinkPrevious />,
    nextArrow: <GrLinkNext />,
    variableWidth: true,
  };

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
    <>
      <MainWrapper>
        <IntroBrunch>
          <IntroH3>
            개발이 작품이 되는 공간, 브랜치타임{' '}
            <GiTreeBranch className="logo" />
          </IntroH3>
          <IntroP>
            <IntroSpan color="#cacaca">
              브랜치 타임에서 여러분의 지식을 기록해 주세요.
            </IntroSpan>
            <IntroSpan color="#cacaca">그리고 공유해 주세요.</IntroSpan>
            <IntroSpan color="#dedede">
              여러분이 간직하고 있는 코드와 기술을.
            </IntroSpan>
          </IntroP>
        </IntroBrunch>
        <EditorPic>
          <StyledSlider {...settings}>
            {MAIN_SLIDER.map(slide => {
              const { id, name, width } = slide;
              return (
                <div style={{ width: { width } }} key={id}>
                  <h3>{name}</h3>
                </div>
              );
            })}
          </StyledSlider>
        </EditorPic>
        <Keywords>
          <KeywordH>BRANCH KEYWORD</KeywordH>
          <KeywordSpan>키워드로 분류된 다양한 글 모음</KeywordSpan>
          <KeywordList>
            {KEYWORD_ARRAY.map(arr => {
              const { id, name } = arr;
              return <KeywordOne key={id}>{name}</KeywordOne>;
            })}
          </KeywordList>
        </Keywords>
        <Writers>
          <KeywordH>BRANCH WRITERS</KeywordH>
          <KeywordSpan>브랜치 추천 작가</KeywordSpan>
          <WriterKeywordWrap>
            <WriterButton>프론트엔드</WriterButton>
            <WriterButton>백엔드</WriterButton>
            <WriterButton>알고리즘</WriterButton>
          </WriterKeywordWrap>
          <WriterWrap>
            <ul>
              {WRITER_LIST.map(list => {
                const { id, src, name, job, desc, tag } = list;
                return (
                  <li key={id}>
                    <a href="#!">
                      <WriterProfile src={src} alt="writer" />
                      <WritersName>{name}</WritersName>
                      <WritersJob>{job}</WritersJob>
                      <WriterDesc>{desc}</WriterDesc>
                      <div>
                        {tag.map(tag => {
                          const { id, name } = tag;
                          return <WriterButton key={id}>{name}</WriterButton>;
                        })}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </WriterWrap>
        </Writers>
        <Recommend>
          <KeywordH>RECOMMENDED ARTICLES</KeywordH>
          <KeywordSpan>브랜치타임의 다양한 글을 만나보세요.</KeywordSpan>

          <RecommendSlider {...recommendSettings}>
            {RECOMMEND_LIST.map(list => {
              const { id, src, title, body, author } = list;
              return (
                <div key={id}>
                  <img src={src} alt="recommend" />
                  <strong>{title}</strong>
                  <p>{body}</p>
                  <span>by {author}</span>
                </div>
              );
            })}
          </RecommendSlider>
        </Recommend>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Main;

const MainWrapper = styled.article`
  margin-top: 3.75rem;
  ${theme => theme.theme.flex.flexBox()}
  flex-direction: column;
`;

const IntroBrunch = styled.div`
  width: 60rem;
  height: 14.313rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: normal;
  text-align: left;
  margin: 0 auto;
`;

const IntroH3 = styled.h3`
  color: #1a1a1a;
  font-family: 'Noto Sans DemiLight', 'Malgun Gothic';
  font-size: 2.5rem;

  .logo {
    font-size: 1.875rem;
    padding: 0.313rem;
    color: white;
    background-color: black;
    margin-bottom: 1.25rem;
    border-radius: 50%;
  }
`;

const IntroP = styled.p`
  display: flex;
  flex-direction: column;
`;

const IntroSpan = styled.span`
  color: ${props => props.color};
  font-size: 2rem;
  line-height: 2.875rem;
`;

const EditorPic = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.375rem;
  margin-left: 20rem;
  height: 35.813rem;
`;

const StyledSlider = styled(Slider)`
  border: 1px solid black;
  width: 80rem;
  height: 30rem;

  h3 {
    height: 15rem;
    border: 1px solid black;
  }

  p {
    width: 15rem;
    padding-top: 0.625rem;
  }
`;

const RecommendSlider = styled(Slider)`
  width: 80rem;
  margin-top: 1.375rem;

  div {
    height: 36.031rem;
  }
  img {
    width: 15rem;
    height: 15rem;
  }
  strong {
    font-weight: bold;
  }
  p {
    width: 15rem;
    color: #959595;
    font-size: 12px;
    padding-top: 10px;
  }
  span {
    color: #bfbfbf;
    font-size: 12px;
    padding-top: 22px;
    margin-top: 3px;
  }
`;

const Keywords = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  flex-direction: column;

  height: 40.125rem;
`;

const KeywordSpan = styled.span`
  margin: 10px auto;
`;

const KeywordH = styled.h3`
  text-align: center;
  height: 13px;
  font-size: 20px;
  letter-spacing: 0.4em;
  margin: 10px auto;
  width: 500px;
`;

const KeywordList = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  flex-wrap: wrap;
  width: 60rem;
  height: 21.688rem;
  margin: 2rem 14.531rem;
  /* border: 1px solid black; */
`;

const KeywordOne = styled.a`
  width: 7.438rem;
  height: 7.438rem;
  ${theme => theme.theme.flex.flexBox()}
  text-align: center;
  border: 1px solid #efefef;

  :hover {
    border: 1px solid #02c3bd;
    color: #02c3bd;
    cursor: pointer;
  }
`;

const Writers = styled.div`
  width: 100%;
  height: 80rem;
  background: #fafafa;
  margin: 9.375rem auto;
  padding-top: 6.25rem;
  text-align: center;

  span {
    margin: 10px auto;
  }
`;

const WriterButton = styled.button`
  border: 1px solid #eee;
  background-color: white;
  border-radius: 1.563rem;
  display: inline-block;
  font-size: 0.938rem;
  line-height: 1.125rem;
  margin: 0 0.125rem;
  padding: 0.438rem 1rem 0.375rem;
`;

const WriterKeywordWrap = styled.div`
  margin-top: 2.688rem;
  text-align: center;
`;

const WriterWrap = styled.div`
  margin: 50px auto 85px;
  width: 60rem;

  ul {
    ${theme => theme.theme.flex.flexBox()}
    flex-wrap: wrap;
    padding-bottom: 6.25rem;
    li {
      width: 19.375rem;
      height: 23.75rem;
      background-color: white;
      margin: 5px auto;

      a {
        ${theme => theme.theme.flex.flexBox()}
        flex-direction: column;
        padding: 2.5rem 2.875rem;

        div {
          margin-top: 2.688rem;
        }

        button {
          font-size: 0.8rem;
          color: #666;
        }
      }
    }
  }
`;

const WriterProfile = styled.img`
  width: 5rem;
  height: 5rem;
  border: 1px solid #efefef;
  border-radius: 50%;
`;

const WritersName = styled.span`
  font-size: 1.25rem;
`;

const WritersJob = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

const WriterDesc = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
`;

const Recommend = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  flex-direction: column;
  width: 100%;
  height: 52.781rem;
`;

const KEYWORD_ARRAY = [
  {
    id: 1,
    name: '개발 . 프로그래밍',
  },
  {
    id: 2,
    name: '웹 개발',
  },
  {
    id: 3,
    name: '프론트엔드',
  },
  {
    id: 4,
    name: '백엔드',
  },
  {
    id: 5,
    name: '풀스택',
  },
  {
    id: 6,
    name: '모바일 앱 개발',
  },
  {
    id: 7,
    name: '프로그래밍 언어',
  },
  {
    id: 8,
    name: `알고리즘`,
  },
  {
    id: 9,
    name: '데이터 사이언스',
  },
  {
    id: 10,
    name: '데이터베이스',
  },
  {
    id: 11,
    name: '개발 도구',
  },
  {
    id: 12,
    name: '개발자 이야기',
  },
  {
    id: 13,
    name: '게임 개발',
  },
  {
    id: 14,
    name: '인공지능',
  },
  {
    id: 15,
    name: 'CAD. 3D 모델링',
  },
  {
    id: 16,
    name: 'UX/UI',
  },
  {
    id: 17,
    name: '사진, 영상',
  },
  {
    id: 18,
    name: '사운드',
  },
  {
    id: 19,
    name: '오피스',
  },
  {
    id: 20,
    name: '마케팅',
  },
  {
    id: 21,
    name: '업무 자동화',
  },
  {
    id: 22,
    name: '취업. 이직',
  },
  {
    id: 23,
    name: '개인 브랜딩',
  },
  {
    id: 24,
    name: '창업',
  },
];

const WRITER_LIST = [
  {
    id: 1,
    src: 'images/bread.png',
    name: '김행갬',
    job: '프론트엔드 개발자',
    desc: '현재 카카오에서 프론트엔드 개발자로 일하고 있습니다.',
    tag: [
      {
        id: 1,
        name: '프론트엔드',
      },
      {
        id: 2,
        name: '웹 개발',
      },
      {
        id: 3,
        name: '...',
      },
    ],
  },
  {
    id: 2,
    src: 'images/bread.png',
    name: '김행갬',
    job: '프론트엔드 개발자',
    desc: '현재 카카오에서 프론트엔드 개발자로 일하고 있습니다.',
    tag: [
      {
        id: 1,
        name: '프론트엔드',
      },
      {
        id: 2,
        name: '웹 개발',
      },
      {
        id: 3,
        name: '...',
      },
    ],
  },
  {
    id: 3,
    src: 'images/bread.png',
    name: '김행갬',
    job: '프론트엔드 개발자',
    desc: '현재 카카오에서 프론트엔드 개발자로 일하고 있습니다.',
    tag: [
      {
        id: 1,
        name: '프론트엔드',
      },
      {
        id: 2,
        name: '웹 개발',
      },
      {
        id: 3,
        name: '...',
      },
    ],
  },
  {
    id: 4,
    src: 'images/bread.png',
    name: '김행갬',
    job: '프론트엔드 개발자',
    desc: '현재 카카오에서 프론트엔드 개발자로 일하고 있습니다.',
    tag: [
      {
        id: 1,
        name: '프론트엔드',
      },
      {
        id: 2,
        name: '웹 개발',
      },
      {
        id: 3,
        name: '...',
      },
    ],
  },
  {
    id: 5,
    src: 'images/bread.png',
    name: '김행갬',
    job: '프론트엔드 개발자',
    desc: '현재 카카오에서 프론트엔드 개발자로 일하고 있습니다.',
    tag: [
      {
        id: 1,
        name: '프론트엔드',
      },
      {
        id: 2,
        name: '웹 개발',
      },
      {
        id: 3,
        name: '...',
      },
    ],
  },
  {
    id: 6,
    src: 'images/bread.png',
    name: '김행갬',
    job: '프론트엔드 개발자',
    desc: '현재 카카오에서 프론트엔드 개발자로 일하고 있습니다.',
    tag: [
      {
        id: 1,
        name: '프론트엔드',
      },
      {
        id: 2,
        name: '웹 개발',
      },
      {
        id: 3,
        name: '...',
      },
    ],
  },
];

const MAIN_SLIDER = [
  {
    id: 1,
    name: 1,
    width: 30,
  },
  {
    id: 2,
    name: 2,
    width: 200,
  },
  {
    id: 3,
    name: 3,
  },
  {
    id: 4,
    name: 4,
  },
  {
    id: 5,
    name: 5,
  },
  {
    id: 6,
    name: 6,
  },
  {
    id: 7,
    name: 7,
  },
  {
    id: 8,
    name: 8,
  },
  {
    id: 9,
    name: 9,
  },
  {
    id: 10,
    name: 10,
  },
  {
    id: 11,
    name: 11,
  },
  {
    id: 12,
    name: 12,
  },
  {
    id: 13,
    name: 13,
  },
  {
    id: 14,
    name: 14,
  },
  {
    id: 15,
    name: 15,
  },
  {
    id: 16,
    name: 16,
  },
];

const RECOMMEND_LIST = [
  {
    id: 1,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 2,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 3,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 4,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 5,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 6,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 7,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 8,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 9,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
  {
    id: 10,
    src: 'images/bread.png',
    title: 'Title',
    body: '감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    author: '행갬',
  },
];
