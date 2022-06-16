import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Toggle from '../../components/MyPage/Toggle';

const UserInfo = ({ userList, isMyPage }) => {
  const { name, avatar, description, interestedAuthor, subscriber } = userList;
  const navigate = useNavigate();

  const goToProfileEdit = () => {
    navigate('/MyPageProfileEdit');
  };

  const goToWrite = () => {
    navigate('/Write');
  };

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prev => !prev);
  };

  return (
    <UserInfoContainer>
      <UserContainer>
        <HeaderLeft>
          {userList && <Author>{name}</Author>}
          {userList && <AuthorDescription>{description}</AuthorDescription>}
        </HeaderLeft>
        <HeaderRight>
          <UserAvatar>
            {userList && <AvatarProfile src={avatar} alt="profile" />}
          </UserAvatar>
        </HeaderRight>
      </UserContainer>
      <Subscribe>
        <Interested>
          <Subscriber>
            <SubsMargin>구독자</SubsMargin>
            {userList && <SubsData>{subscriber}</SubsData>}
          </Subscriber>
          <div className="interestedWriter">
            <SubsMargin>관심작가</SubsMargin>
            {userList && <SubsData>{interestedAuthor}</SubsData>}
          </div>
        </Interested>
        <SubscribeBtn>
          {isMyPage && (
            <div>
              <Write onClick={goToWrite}>글쓰기</Write>
            </div>
          )}
          {!isMyPage && (
            <>
              <div>
                <Suggestion>제안하기</Suggestion>
              </div>
              <div className="subscription">
                <Subscription>구독하기</Subscription>
              </div>
            </>
          )}

          <EllipsisMenu onClick={handleClick}>
            <IoEllipsisVerticalSharp />
          </EllipsisMenu>
        </SubscribeBtn>
      </Subscribe>

      <article>
        {isMyPage && (
          <ProfileEdit>
            {click && (
              <InvisibleMenu>
                <Edit onClick={goToProfileEdit}>프로필 편집</Edit>
              </InvisibleMenu>
            )}
          </ProfileEdit>
        )}
        {!isMyPage && <Toggle click={click} />}
      </article>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  width: 100%;
  padding: 0 25rem;
  margin: 10rem 0 0.5rem 0;
`;
const UserContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.75rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const Author = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
`;

const AuthorDescription = styled.div`
  color: gray;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-start;
`;

const UserAvatar = styled.div`
  width: 6.5rem;
  height: 6.5rem;
`;

const AvatarProfile = styled.img`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
`;

const Subscribe = styled.article`
  display: flex;
  justify-content: space-between;
`;

const Interested = styled.div`
  display: flex;
  color: gray;
`;

const Subscriber = styled.div`
  &:first-child {
    margin-right: 2rem;
  }
`;

const SubsMargin = styled.div`
  margin-bottom: 1rem;
`;

const SubsData = styled.div`
  font-size: 1.5rem;
`;

const SubscribeBtn = styled.div`
  display: flex;
  font-size: 2rem;
  & div:nth-child(1),
  & div:nth-child(2) {
    margin-right: 1rem;
  }
`;

const Suggestion = styled.button`
  color: gray;
  background-color: transparent;
  padding: 0.3rem 1rem;
  font-size: 1.3rem;
  border: 1px solid gray;
  border-radius: 1.3rem;
  cursor: pointer;
`;

const Subscription = styled.button`
  color: #52d7d2;
  background-color: transparent;
  padding: 0.3rem 1rem;
  font-size: 1.3rem;
  border: 1px solid #52d7d2;
  border-radius: 1.3rem;
  cursor: pointer;
`;

const Write = styled.button`
  color: #52d7d2;
  background-color: transparent;
  padding: 0.3rem 1rem;
  font-size: 1.3rem;
  border: 1px solid #52d7d2;
  border-radius: 1.3rem;
  cursor: pointer;
`;

const EllipsisMenu = styled.div`
  color: lightgray;
  cursor: pointer;
`;

const ProfileEdit = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 8rem;
`;
const InvisibleMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Edit = styled.button`
  color: gray;
  border: 1px solid lightgray;
  background-color: transparent;
  padding: 1.2rem 7rem;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export default UserInfo;
