import { AiOutlineMenu } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import styled from 'styled-components';
import React, { useState } from 'react';
import SideDrawer from './SideDrawer';
import GlobalFonts from '../../fonts/fonts';

const Nav = () => {
  const [navDrawer, setNavDrawer] = useState(false);

  const handleNavDrawer = () => {
    setNavDrawer(prev => !prev);
  };

  return (
    <>
      <GlobalFonts />
      <SideDrawer navDrawer={navDrawer} closeDrawer={handleNavDrawer} />
      <Navigator>
        <NavWrapper>
          <NavElement>
            <NavBtn onClick={handleNavDrawer}>
              <AiOutlineMenu size={25} />
            </NavBtn>
            <NavBtn>
              <img src="/images/branchTime.png" alt="logo" />
            </NavBtn>
          </NavElement>
          <NavElement>
            <NavBtn>
              <NavLogin>시작하기</NavLogin>
              <CgSearch size={25} />
            </NavBtn>
          </NavElement>
        </NavWrapper>
      </Navigator>
    </>
  );
};

export default Nav;

const Navigator = styled.section`
  position: relative;
  background-color: white 0.5;
  border-bottom: 1px solid #eee;
  position: fixed;
  width: 100vw;
`;

const NavWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'space-between')}
  height: 4rem;
  margin: 0.2rem 1rem 0 1rem;
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
`;
