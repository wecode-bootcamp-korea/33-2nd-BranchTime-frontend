import React from 'react';
import styled from 'styled-components';
import { TbHeartHandshake } from 'react-icons/tb';
import { BsChatDots } from 'react-icons/bs';
import { BiShareAlt } from 'react-icons/bi';

const PostDetailNav = () => {
  return (
    <div>
      <CoverNav>
        <div>NavComponent</div>
        <Button>subCate</Button>
        <Ul>
          <Li>
            <TbHeartHandshake size={25} />
            <LickCount>4</LickCount>
          </Li>
          <Li>
            <BsChatDots size={20} />
          </Li>
          <Li>
            <BiShareAlt size={20} />
          </Li>
        </Ul>
      </CoverNav>
    </div>
  );
};

export default PostDetailNav;

const CoverNav = styled.nav`
  ${theme => theme.theme.flex.flexBox('', '', '')}
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: ${theme => theme.theme.paddings.xl};
  color: ${theme => theme.theme.colors.white};
  z-index: 150;
`;

const Ul = styled.ul`
  ${theme => theme.theme.flex.flexBox()}
`;

const Li = styled.div`
  margin-right: ${theme => theme.theme.margins.large};
  color: ${theme => theme.theme.colors.white};
  cursor: pointer;
`;

const LickCount = styled.span`
  vertical-align: super;
  margin-left: ${theme => theme.theme.margins.small};
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: inherit;
  border: 1px solid #fff;
  border-radius: 0.875rem;
  color: #fff;
  font-size: 0.5rem;
  padding: ${theme => theme.theme.paddings.small} 8px;
`;
