import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPageContent from '../../components/MyPage/MyPageContent';
import UserInfo from '../../components/MyPage/UserInfo';
import { BASE_URL } from '../../config';

const MyPage = () => {
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    fetch('/data/contentData.json')
      .then(res => res.json())
      .then(contentData => setContentList(contentData));
  }, []);

  const [userList, setUserList] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}users/mypage`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(userList => setUserList(userList.user_detail));
  }, []);

  return (
    <MyPageContainer className="myPage">
      <UserInfo userList={userList} isMyPage={true} />
      <BtnContainer>
        {btnMap.map(item => (
          <Btn key={item.id} data={item}>
            {item.title}
          </Btn>
        ))}
      </BtnContainer>
      {contentList.map(contentDatas => (
        <MyPageContent key={contentDatas.id} postItem={contentDatas} />
      ))}
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const BtnContainer = styled.section`
  width: 100%;
  padding: 0 25rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Btn = styled.button`
  width: 33%;
  background-color: transparent;
  border: none;
  border-top: 1px solid lightgray;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 1.5rem 0;

  &:focus {
    border-top: 1px solid black;
  }
`;
export default MyPage;

const btnMap = [
  {
    id: 0,
    title: '최근 읽은 글',
  },
  {
    id: 1,
    title: '좋아요',
  },
  {
    id: 2,
    title: '내가 쓴 글',
  },
];
