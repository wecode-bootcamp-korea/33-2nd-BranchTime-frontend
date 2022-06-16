import React from 'react';
import styled from 'styled-components';

const Keyword = () => {
  return (
    <KeywordList>
      {KEYWORD_ARRAY.map(arr => {
        const { id, name } = arr;
        return <KeywordOne key={id}>{name}</KeywordOne>;
      })}
    </KeywordList>
  );
};

export default Keyword;

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
