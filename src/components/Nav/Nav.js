import { AiOutlineMenu } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideDrawer from './SideDrawer';
import GlobalFonts from '../../fonts/fonts';
import Login from '../../pages/Login/Login';

const Nav = () => {
  const [navDrawer, setNavDrawer] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [navBar, SetNavBar] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const currentURL = location.pathname;

  const startLogin = () => {
    setLoginModal(true);
  };

  const quitLogin = () => {
    setLoginModal(false);
  };

  const handleNavDrawer = () => {
    setNavDrawer(prev => !prev);
  };

  const changeNavStyle = () => {
    if (window.scrollY >= 30) {
      SetNavBar(false);
    } else {
      SetNavBar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavStyle);
  }, [navBar]);

  const goToMain = () => {
    navigate('/main');
    setNavDrawer(false);
  };

  const goToMyPage = () => {
    navigate('/myPage');
    setNavDrawer(false);
  };

  const goToWrite = () => {
    navigate('/write');
    setNavDrawer(false);
  };

  const goToBook = () => {
    navigate('/bookAnimation');
    setNavDrawer(false);
  };

  return (
    <>
      <GlobalFonts />
      <SideDrawer
        goToMain={goToMain}
        goToWrite={goToWrite}
        goToMyPage={goToMyPage}
        goToBook={goToBook}
        navDrawer={navDrawer}
        closeDrawer={handleNavDrawer}
        startLogin={startLogin}
        quitLogin={quitLogin}
        loginModal={loginModal}
      />
      <Navigator changeNavBar={navBar} currentURL={currentURL}>
        <NavWrapper>
          <NavElement>
            <NavBtn>
              <AiOutlineMenu
                currentURL={currentURL}
                onClick={handleNavDrawer}
                size={25}
              />
            </NavBtn>
            <NavBtn onClick={goToMain}>
              {currentURL !== '/write' && (
                <img src="/images/branchTime.png" alt="logo" />
              )}
            </NavBtn>
          </NavElement>
          <NavElement>
            <NavBtn>
              {currentURL === '/main' && (
                <NavLogin onClick={startLogin}>시작하기</NavLogin>
              )}
              {currentURL === '/write' && <NavLogin>저장</NavLogin>}
              {currentURL === '/main' && <CgSearch size={25} />}
              {currentURL === '/post_list' && <CgSearch size={25} />}
              {currentURL === '/myPage' && <CgSearch size={25} />}
            </NavBtn>
          </NavElement>
        </NavWrapper>
      </Navigator>
      {loginModal && <Login quitLogin={quitLogin} />}
    </>
  );
};

export default Nav;

const Navigator = styled.div`
  position: relative;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 800;
  background-color: white;

  ${props =>
    props.changeNavBar &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid #eee;
    `}

  ${props =>
    props.currentURL === '/write' &&
    css`
      position: absolute;
      background-color: rgba(255, 255, 255, 0);
      border-bottom: 0;
    `}

    ${props =>
    props.currentURL === '/post_detail' &&
    css`
      position: absolute;
      background-color: rgba(255, 255, 255, 0);
      border-bottom: 0;
    `}

    ${props =>
    props.currentURL === '/post_list' &&
    css`
      position: absolute;
      background-color: rgba(255, 255, 255, 0);
      border-bottom: 0;
    `}
`;

const NavWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'space-between')}
  height: 4rem;
  margin: 0 1rem 0 1rem;
  padding-top: 0.2rem;
`;

const NavElement = styled.span`
  ${({ theme }) => theme.flex.flexBox}
`;

const NavBtn = styled.button`
  ${({ theme }) => theme.flex.flexBox}
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: 0.2rem;

  img {
    width: 5.2rem;
    margin-left: 0.2rem;
  }
`;

const NavLogin = styled.span`
  ${({ theme }) => theme.flex.flexBox}
  height: 1rem;
  margin: 1rem;
  padding: 0.8rem 0.7rem;
  border-radius: 10rem;
  border: 1px solid #999;
  color: #999;
  font-size: 12px;
  background-color: ${theme => theme.theme.colors.white};
`;
