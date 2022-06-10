import React from 'react';
import styled from 'styled-components';

const Toggle = ({ click }) => {
  return (
    <InvisibleMenuContainer>
      {click && (
        <InvisibleMenu>
          <Block>차단하기</Block>
          <Notify>신고하기</Notify>
        </InvisibleMenu>
      )}
    </InvisibleMenuContainer>
  );
};

const InvisibleMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 8rem;
`;

const InvisibleMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Block = styled.button`
  color: gray;
  border: 1px solid lightgray;
  background-color: transparent;
  padding: 1.2rem 7rem;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const Notify = styled.button`
  color: gray;
  border: 1px solid lightgray;
  background-color: transparent;
  padding: 1.2rem 7rem;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
`;
export default Toggle;
