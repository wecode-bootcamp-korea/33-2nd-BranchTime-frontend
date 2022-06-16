import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [iconActive, setIconActive] = useState(false);

  const isIconActive = () => {
    setIconActive(true);
  };

  const hideIconActive = () => {
    setIconActive(false);
  };

  const goToDetail = id => {
    navigate(`/post_detail/${id}`);
  };

  const goToProfile = id => {
    navigate(`/userPage/${id}`);
  };

  useEffect(() => {
    fetch(`http://10.58.2.42:8000/contents/postlist/search`)
      .then(res => res.json())
      .then(data => setSearchData(data.list));
  }, []);

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
            {searchData
              .filter(list => {
                return (
                  list.post_title.toLowerCase().includes(value.toLowerCase()) &&
                  list
                );
              })
              .map(list => {
                return (
                  <PostWrapper key={list.post_id}>
                    <PostTitle onClick={() => goToDetail(list.post_id)}>
                      {list.post_title}
                    </PostTitle>
                  </PostWrapper>
                );
              })}
          </div>
        </ResultLeft>
        <ResultRight>
          <ResultTitle>작가 검색</ResultTitle>
          {searchData
            .filter(list => {
              return (
                list.writeUser.toLowerCase().includes(value.toLowerCase()) &&
                list
              );
            })
            .map(list => {
              return (
                <WriterWrapper key={list.write_id}>
                  <WriterImg src={list.writeThumbnail} />
                  <WriterTitle
                    onClick={() => {
                      goToProfile(list.write_id);
                    }}
                  >
                    {list.writeUser}
                  </WriterTitle>
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
  color: gray;

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
