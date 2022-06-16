import { GiTreeBranch } from 'react-icons/gi';
import styled, { css } from 'styled-components';
import Login from '../../pages/Login/Login';

const SideDrawer = ({
  isActive,
  setIsActive,
  goToMain,
  goToWrite,
  goToMyPage,
  goToBook,
  loginModal,
  startLogin,
  quitLogin,
  navDrawer,
  closeDrawer,
}) => {
  const logOut = () => {
    // localStorage.removeItem('token');
    setIsActive(false);
  };

  return (
    <>
      {loginModal && <Login quitLogin={quitLogin} />}
      <DrawerBar drawerState={navDrawer}>
        <DrawerHeader>
          <MyProfile onClick={goToMyPage}>
            <ProfileImg>
              <GiTreeBranch />
            </ProfileImg>
            <ProfileText>
              you can code anything
              <br />
              what you imagine
              <div>- King God Kyeom -</div>
            </ProfileText>
          </MyProfile>
          {!isActive && (
            <HeaderLoginBtn onClick={startLogin}>
              브랜치타임 시작하기
            </HeaderLoginBtn>
          )}
          {isActive && (
            <HeaderLoginBtn onClick={goToWrite}>글쓰기</HeaderLoginBtn>
          )}
        </DrawerHeader>
        <DrawerBody>
          {isActive && (
            <>
              <BtnElement>
                <button onClick={goToMyPage}>내 브런치</button>
                <hr />
              </BtnElement>
              <DivideLine />
            </>
          )}
          <BtnElement>
            <button onClick={goToMain}>브런치 홈</button>
            <hr />
          </BtnElement>
          <BtnElement>
            <button onClick={goToBook}>브런치 북</button>
            <hr />
          </BtnElement>
          {isActive && <LogOutBtn onClick={logOut}>로그아웃</LogOutBtn>}
        </DrawerBody>
      </DrawerBar>
      <DrawerBackground drawerState={navDrawer} onClick={closeDrawer} />
    </>
  );
};

const LogOutBtn = styled.button`
  position: absolute;
  bottom: 5%;
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  border: 1px solid #999;
  color: #999;
  background-color: white;
  cursor: pointer;
`;

const DivideLine = styled.hr`
  width: 60%;
  margin-bottom: 2rem;
  border-top: 1px solid #ddd;
  opacity: 0.5;
`;

const MyProfile = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  cursor: pointer;
`;

const DrawerBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: -100%;

  ${props =>
    props.drawerState &&
    css`
      transition: 600ms;
      left: 0;
    `}
`;

const ProfileText = styled.h5`
  font-family: 'ItalianStyleLtIt';
  margin-bottom: 0.5rem;

  div {
    margin-top: 1rem;
    color: #999;
  }
`;

const DrawerBar = styled.div`
  position: fixed;
  width: 15rem;
  height: 100vh;
  left: -15rem;
  border-right: 1px solid #ccc;
  background-color: white;
  font-size: 14px;
  text-align: center;
  transition: 800ms;
  z-index: 1100;

  ${props =>
    props.drawerState &&
    css`
      transition: 600ms;
      left: 0;
    `}
`;

const DrawerHeader = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  height: 25%;
  min-height: 250px;
  border-bottom: 1px solid #ccc;
  background-color: #f8f8f8;

  div {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ProfileImg = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  color: white;
  background-color: black;
  font-size: 1.875rem;
  padding: 0.313rem;
`;

const HeaderLoginBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  border: 1px solid #02c3bd;
  color: #02c3bd;
  background-color: white;
  cursor: pointer;
`;

const BtnElement = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  margin-bottom: 1.5rem;

  &:hover {
    button {
      color: #02c3bd;
    }

    hr {
      border-bottom: 0.5px solid #02c3bd;
    }
  }

  hr {
    width: 60%;
    position: absolute;
    border: none;
  }

  button {
    font-weight: 300;
    border: 0;
    padding: 0 0.8rem;
    background-color: white;
    text-align: center;
    cursor: pointer;
    z-index: 10;
  }
`;

const DrawerBody = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  padding-top: 2.5rem;
  text-align: center;
`;

export default SideDrawer;
