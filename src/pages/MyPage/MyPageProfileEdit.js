import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

const MyPageProfileEdit = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [image, setImage] = useState(
    userList.avatar ||
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
  );
  const [imageFile, setImgFile] = useState();
  const fileInput = useRef(null);

  const goToMyPage = () => {
    navigate('/myPage');
  };

  useEffect(() => {
    fetch(`${BASE_URL}users/mypage`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(userList => {
        setUserList(userList.user_detail);
        setImage(userList.user_detail.avatar);
      });
  }, []);

  const changeProfile = e => {
    if (e.target.files[0]) {
      setImgFile(e.target.files[0]);
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const [postItmes, setPostItems] = useState({
    authorName: '',
    authorDescription: '',
  });

  const inputTransfer = e => {
    const { value, src, name } = e.target;
    if (name === 'profile_img') {
      setPostItems({
        ...postItmes,
        [name]: src,
      });
    }
    setPostItems({
      ...postItmes,
      [name]: value,
    });
  };

  const formDataPost = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('name', postItmes.authorName);
    formData.append('description', postItmes.authorDescription);
    fetch(`${BASE_URL}users/profileupdate`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: formData,
    }).then(res => {
      if (res => res === 'SUCCESS') {
        navigate('/myPage');
      } else {
        alert('잘못된 요청입니다');
      }
    });
  };

  return (
    <div>
      {userList && (
        <UserInfoContainer>
          <UserContainer>
            <HeaderLeft>
              <AuthorContainer>
                <AuthorName>
                  작가명<span>*</span>
                </AuthorName>
                <Author
                  defaultValue={userList.name}
                  name="authorName"
                  onChange={inputTransfer}
                />
              </AuthorContainer>
              <DescriptionContainer>
                <Introduce>
                  소개<span>*</span>
                </Introduce>
                <AuthorDescription
                  defaultValue={userList.description}
                  name="authorDescription"
                  onChange={inputTransfer}
                />
              </DescriptionContainer>
              <BtnContainer>
                <CancleBtn onClick={goToMyPage}>취소하기</CancleBtn>
                <SaveBtn onClick={formDataPost}>저장하기</SaveBtn>
              </BtnContainer>
            </HeaderLeft>
            <HeaderRight>
              <UserAvatar>
                <AvatarProfile
                  src={image}
                  onClick={() => {
                    fileInput.current.click();
                  }}
                  alt="profile"
                  name="avatar"
                />
                <UploadAvatar
                  type="file"
                  accept="image/*"
                  name="profile_img"
                  ref={fileInput}
                  onChange={changeProfile}
                />
              </UserAvatar>
            </HeaderRight>
          </UserContainer>
        </UserInfoContainer>
      )}
    </div>
  );
};

const UserInfoContainer = styled.div`
  height: 50vh;
  width: 100%;
  padding: 0 25rem;
  margin: 10rem 0 0.5rem 0;
`;
const UserContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-bottom: 1.75rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const AuthorName = styled.div`
  & span {
    color: #2acdc8;
  }
  margin-bottom: 2rem;
`;

const Author = styled.input`
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  border: none;
  border-bottom: 1px solid lightgray;
  &:focus {
    outline: none;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Introduce = styled.div`
  & span {
    color: #2acdc8;
  }
  margin-bottom: 2rem;
`;

const AuthorDescription = styled.input`
  color: gray;
  padding: 3rem;
  width: 100%;
`;

const BtnContainer = styled.div``;

const CancleBtn = styled.button`
  border: 1px solid gray;
  color: gray;
  background-color: transparent;
  padding: 0.7rem 1.5rem;
  margin-right: 1rem;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
`;

const SaveBtn = styled.button`
  border: 1px solid #2acdc8;
  color: #2acdc8;
  background-color: transparent;
  padding: 0.7rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-start;
`;

const UploadAvatar = styled.input`
  display: none;
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

export default MyPageProfileEdit;
