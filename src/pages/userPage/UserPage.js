import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserInfo from '../../components/MyPage/UserInfo';
import MyPageContent from '../../components/MyPage/MyPageContent';
import { BASE_URL } from '../../config';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const params = useParams();
  const [contentList, setContentList] = useState([]);
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}authors/detail/${params.id}`)
      .then(res => res.json())
      .then(authorList => setAuthorList(authorList.author_detail));
  }, []);

  useEffect(() => {
    fetch('/data/contentData.json')
      .then(res => res.json())
      .then(contentData => setContentList(contentData));
  }, []);

  return (
    <MyPageContainer>
      <UserInfo userList={authorList} isMyPage={false} />
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
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1.5rem 0;

  &:focus {
    border-top: 1px solid black;
  }
`;

const btnMap = [
  {
    id: 0,
    title: '작가 소개',
  },
  {
    id: 1,
    title: '글',
  },
  {
    id: 2,
    title: '작품',
  },
];

export default UserPage;
