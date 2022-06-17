import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from './footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GiTreeBranch } from 'react-icons/gi';
import TopCarousel from './TopCarousel';
import RecommendCarousel from './RecommendCarousel';
import { BASE_URL } from '../../config';
import WriterList from './writerList/WriterList';
import { useSearchParams } from 'react-router-dom';
import Keyword from './keyword/Keyword';

const Main = () => {
  const [writerList, setWriterList] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('subcategory_id');

  useEffect(() => {
    fetch(`${BASE_URL}authors/?subcategory_id=${category}`)
      .then(res => res.json())
      .then(data => {
        setWriterList(data.message);
      });
  }, [category]);

  return (
    <>
      <MainWrapper>
        <IntroBrunch>
          <IntroH3>
            개발이 작품이 되는 공간, 브랜치타임
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
          <TopCarousel />
        </EditorPic>
        <Keywords>
          <KeywordH>BRANCH KEYWORD</KeywordH>
          <KeywordSpan>키워드로 분류된 다양한 글 모음</KeywordSpan>
          <Keyword />
        </Keywords>
        <Writers>
          <KeywordH>BRANCH WRITERS</KeywordH>
          <KeywordSpan>브랜치 추천 작가</KeywordSpan>
          <WriterKeywordWrap>
            {WRITER_CATEGORY.map(({ id, value, number }) => (
              <WriterButton
                key={id}
                onClick={() => setSearchParams({ subcategory_id: `${number}` })}
              >
                {value}
              </WriterButton>
            ))}
          </WriterKeywordWrap>
          <WriterWrap>
            <ul>
              <WriterList list={writerList} />
            </ul>
          </WriterWrap>
        </Writers>
        <Recommend>
          <KeywordH>RECOMMENDED ARTICLES</KeywordH>
          <KeywordSpan>브랜치타임의 다양한 글을 만나보세요.</KeywordSpan>
          <RecommendCarousel />
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
  cursor: pointer;

  :active {
    color: #02c3bd;
  }
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
const Recommend = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  flex-direction: column;
  width: 100%;
  height: 52.781rem;
`;

const WRITER_CATEGORY = [
  {
    id: 1,
    value: '프론트엔드',
    number: 73,
  },
  {
    id: 2,
    value: '백엔드',
    number: 74,
  },
  {
    id: 3,
    value: '알고리즘',
    number: 75,
  },
];
