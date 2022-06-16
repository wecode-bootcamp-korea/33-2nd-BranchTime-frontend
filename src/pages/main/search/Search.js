import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineSearch } from 'react-icons/hi';

const Search = () => {
  const [value, setValue] = useState('');
  const [iconActive, setIconActive] = useState(false);

  const isIconActive = () => {
    setIconActive(true);
  };

  const hideIconActive = () => {
    setIconActive(false);
  };

  return (
    <SearchWrapper>
      <InputWrapper>
        <SearchInput
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          onFocus={hideIconActive}
          onBlur={isIconActive}
          placeholder="검색어를 입력해 주세요. "
        />
        {iconActive && <SearchIcon />}
      </InputWrapper>
      <SearchResult>
        <ResultLeft>
          <ResultTitle>글 검색 </ResultTitle>
          <div>
            {POST_LIST.filter(list => {
              return (
                list.title.toLowerCase().includes(value.toLowerCase()) && list
              );
            }).map(list => {
              return (
                <PostWrapper key={list.id}>
                  <PostTitle href="#!">{list.title}</PostTitle>
                </PostWrapper>
              );
            })}
          </div>
        </ResultLeft>
        <ResultRight>
          <ResultTitle>작가 검색</ResultTitle>
          {POST_LIST.filter(list => {
            return (
              list.author.toLowerCase().includes(value.toLowerCase()) && list
            );
          }).map(list => {
            return (
              <WriterWrapper key={list.id}>
                <WriterImg src={list.src} />
                <WriterTitle href="#!">{list.author}</WriterTitle>
              </WriterWrapper>
            );
          })}
        </ResultRight>
      </SearchResult>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  flex-direction: column;
  height: 100vh;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 58.75rem;
  border-bottom: 1px solid black;
`;

const SearchInput = styled.input`
  width: 58.75rem;
  height: 2.813rem;
  font-size: 1.875rem;
  border: none;

  ::placeholder {
    color: lightgray;
  }
`;

const SearchIcon = styled(HiOutlineSearch)`
  font-size: 2rem;
`;

const SearchResult = styled.div`
  display: flex;
  width: 58.75rem;
  height: 24.688rem;
`;

const ResultLeft = styled.div`
  height: 24.688rem;
  flex: 7;
`;

const ResultRight = styled.div`
  height: 24.688rem;
  flex: 3;
`;

const ResultTitle = styled.h3`
  padding-top: 1.875rem;
  font-size: 0.8rem;
  color: lightgray;
`;

const PostWrapper = styled.div`
  margin: 2rem 0;
  animation: fadeInUp 0.5s;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

const PostTitle = styled.a`
  font-size: 1.25rem;
  color: #ebebeb;

  &:hover {
    text-decoration: underline;
  }
`;

const WriterWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  animation: fadeInUp 0.5s;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

const WriterTitle = styled.a`
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const WriterImg = styled.img`
  border-radius: 50%;
  margin-right: 0.5rem;
  width: 1.875rem;
  height: 1.875rem;
  border: 1px solid black;
`;

const POST_LIST = [
  {
    id: 1,
    title: '가지볶음 만드는 법',
    author: '김행갬',
    src: 'images/bread.png',
  },
  {
    id: 2,
    title: '나비야 나비야 이리 날아오너라',
    author: '박주영',
    src: 'images/bread.png',
  },
  {
    id: 3,
    title: '다림질 잘 하는 법',
    author: '이해용',
    src: 'images/bread.png',
  },
  {
    id: 4,
    title: '라면 꼬들파 vs 퍼짐파',
    author: '손가영',
    src: 'images/bread.png',
  },
  {
    id: 5,
    title: '마법의 성을 지나 늪을 건너',
    author: '임한구',
    src: 'images/bread.png',
  },
  {
    id: 6,
    title: '바퀴벌레 퇴치 하는 방법',
    author: '김완영',
    src: 'images/bread.png',
  },
  {
    id: 7,
    title: '사기 당하지 않고 메이플 거래하는 법',
    author: '예스해리',
    src: 'images/bread.png',
  },
];
