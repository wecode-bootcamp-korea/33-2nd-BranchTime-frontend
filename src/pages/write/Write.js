import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { ImFilePicture } from 'react-icons/im';
import { FaBreadSlice } from 'react-icons/fa';
import { BiAlignMiddle } from 'react-icons/bi';
import styled from 'styled-components';

const Write = () => {
  const [value, setValue] = React.useState(
    '# Hello world! <br> 내용을 입력하세요'
  );

  return (
    <>
      <EditorHeader>
        <HeaderWrapper>
          <InputTitle>
            <BigTitle placeholder="제목을 입력하세요" />
            <SmallTitle placeholder="소제목을 입력하세요" />
          </InputTitle>
          <EditHeaderBtn>
            <button>
              <ImFilePicture />
            </button>
            <button>
              <FaBreadSlice />
            </button>
            <button>
              <BiAlignMiddle />
            </button>
          </EditHeaderBtn>
        </HeaderWrapper>
      </EditorHeader>
      <MDEditorWrapper data-color-mode="light">
        <MDEditor
          value={value}
          onChange={setValue}
          hideToolbar={true}
          enableScroll={true}
          visibleDragbar={false}
          height={1000}
        />
      </MDEditorWrapper>
    </>
  );
};

export default Write;

const MDEditorWrapper = styled.div`
  margin: 0 15%;
`;

const BigTitle = styled.input`
  font-size: 50px;
  margin-bottom: 1rem;
`;

const SmallTitle = styled.input`
  font-size: large;
  font-weight: 300;
`;

const EditHeaderBtn = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  position: absolute;
  right: 0;

  button {
    background: transparent;
    border: 0;
    font-size: x-large;
    margin-bottom: 1rem;
    cursor: pointer;
    color: #999;

    &:hover {
      color: ${theme => theme.theme.colors.mint};
    }
  }
`;

const InputTitle = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  position: absolute;
`;

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  position: relative;
  height: 100%;
  width: 70%;
`;

const EditorHeader = styled.header`
  ${({ theme }) => theme.flex.flexBox}
  height: 40vh;
  text-align: center;

  input {
    -webkit-appearance: none;

    text-align: center;
    outline: none;
    border: 0;

    ::placeholder {
      color: #ccc;
    }
  }
`;
