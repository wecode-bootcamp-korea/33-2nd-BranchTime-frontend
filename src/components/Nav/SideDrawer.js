import styled, { css } from 'styled-components';
import Login from '../../pages/Login/Login';

const SideDrawer = ({
  loginModal,
  startLogin,
  quitLogin,
  navDrawer,
  closeDrawer,
}) => {
  return (
    <>
      {loginModal && <Login quitLogin={quitLogin} />}
      <DrawerBar drawerState={navDrawer}>
        <DrawerHeader>
          <ProfileImg>
            <img src="/images/bread.png" alt="profile" />
          </ProfileImg>
          <ProfileText>
            you can code anything
            <br />
            what you imagine
            <div>- King God Kyeom -</div>
          </ProfileText>
          <HeaderLoginBtn onClick={startLogin}>
            브랜치타임 시작하기
          </HeaderLoginBtn>
        </DrawerHeader>
        <DrawerBody>
          <button>브런치 홈</button>
          <button>브런치 나우</button>
          <button>브런치 책방</button>
        </DrawerBody>
      </DrawerBar>
      <DrawerBackground drawerState={navDrawer} onClick={closeDrawer} />
    </>
  );
};

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
  margin-bottom: 1rem;

  div {
    margin: 0.6rem;
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
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: black;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const HeaderLoginBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  border: 1px solid #02c3bd;
  color: #02c3bd;
  background-color: white;
  cursor: pointer;
`;

const DrawerBody = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  padding-top: 2.5rem;
  text-align: center;

  button {
    border: 0;
    margin-bottom: 1.3rem;
    background: transparent;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #02c3bd;
    }
  }
`;

export default SideDrawer;
