import React from 'react';
import styled, { css } from 'styled-components';
import { MdOutlineInsertPhoto } from 'react-icons/md';

const PostDetailMentTextarea = ({
  commentValue,
  userCommentChange,
  preview,
  fileRef,
  handleFileOnChange,
  handleFileButtonClick,
}) => {
  return (
    <TextareaBox>
      <Textarea
        value={commentValue}
        onChange={userCommentChange}
        isImage={preview !== null}
        placeholder="브랜치에 로그인하고 댓글을 입력해보세요!"
      />

      <PreviewImg>{preview}</PreviewImg>
      <input
        ref={fileRef}
        hidden={true}
        id="file"
        type="file"
        onChange={handleFileOnChange}
      />

      <PhotoFileBtn isImage={preview !== null} onClick={handleFileButtonClick}>
        <MdOutlineInsertPhoto size="20" />
      </PhotoFileBtn>

      <Button onClick={handleFileOnChange}>확인</Button>
    </TextareaBox>
  );
};

export default PostDetailMentTextarea;

const Button = styled.button`
  ${theme => theme.theme.flex.flexBox()}
  margin-left: ${theme => theme.theme.margins.base};
  padding: 0.625rem 1.25rem;
  border: ${theme => theme.theme.borders.gray};
  border-radius: 2.625rem;
  color: #666;
  background-color: ${theme => theme.theme.colors.white};
  cursor: pointer;
`;

const TextareaBox = styled.div`
  position: relative;
  margin-top: 1rem;

  button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 0.75rem;
    padding: 0.375rem 1rem;

    :hover {
      color: ${theme => theme.theme.colors.mint};
      border-color: ${theme => theme.theme.colors.mint};
    }
  }
`;

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 7.5rem;
  background-color: ${theme => theme.theme.colors.white};
  border: 1px solid #eee;
  padding: 1rem 1.188rem 0;

  ${({ isImage }) => {
    if (isImage) {
      return css`
        padding-left: 6.875rem;
      `;
    }
  }}
`;

const PhotoFileBtn = styled.button`
  position: absolute;
  width: 0.313rem;
  bottom: 1rem;
  left: 0;
  color: #888;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ isImage }) => {
    if (isImage) {
      return css`
        top: 1.125rem;
        left: 1.125rem;
        width: 5rem;
        height: 5rem;
        opacity: 0;
      `;
    }
  }}
`;

const PreviewImg = styled.div`
  position: absolute;
  top: 1.063rem;
  left: 1.188rem;
  width: 5rem;
  height: 4.938rem;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
  }
`;
