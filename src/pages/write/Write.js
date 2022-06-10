import MDEditor from '@uiw/react-md-editor';
import { FaBreadSlice } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BiAlignMiddle, BiAlignLeft, BiImages } from 'react-icons/bi';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Write = () => {
  const [value, setValue] = React.useState(
    '# Hello world! <br> 내용을 입력하세요'
  );

  const [titleAlign, setTitleAlign] = useState(true);
  const [onImgMode, setOnImgMode] = useState(false);
  const [headerColorMode, setHeaderColorMode] = useState(false);
  const [headerColor, setHeaderColor] = useState(0);

  const handleAlign = () => {
    setTitleAlign(prev => !prev);
  };

  const handleHeaderColor = () => {
    setHeaderColorMode(prev => !prev);
    setOnImgMode(false);
  };

  const nextColor = () => {
    setHeaderColor(prevHeaderColor => prevHeaderColor + 1);
  };

  const prevColor = () => {
    setHeaderColor(prevHeaderColor => prevHeaderColor - 1);
  };

  const calculateColor = Math.abs(headerColor % 5);
  const COLOR_SET = {
    0: '#173f5f',
    1: '#20639b',
    2: '#3caea3',
    3: '#f6d55a',
    4: '#ed553b',
  };

  const [file, setFile] = useState('');
  const [previewURL, setPreviewURL] = useState('');

  useEffect(() => {
    if (file !== '') setPreviewURL(' (reader.result) ');
  }, [file]);

  const handleFileOnChange = e => {
    e.preventDefault();

    const file = e.target.files[0];
    const reader = new FileReader();
    const formData = new FormData();

    formData.append('files', setFile);
    setFile(file);

    reader.onload = () => {
      setPreviewURL(reader.result);
      setOnImgMode(true);
      setHeaderColorMode(false);
    };

    if (file) reader.readAsDataURL(file);
  };

  const removeImg = () => {
    setOnImgMode(false);
  };

  return (
    <>
      <EditorHeader
        headerColorMode={headerColorMode}
        setColor={COLOR_SET[calculateColor]}
        previewURL={previewURL}
        onImgMode={onImgMode}
      >
        <HeaderWrapper>
          <InputTitle changeAlign={titleAlign}>
            <BigTitle placeholder="제목을 입력하세요" />
            <SmallTitle placeholder="소제목을 입력하세요" />
          </InputTitle>
          <EditHeaderBtn>
            <form>
              <label>
                <BiImages />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileOnChange}
                />
              </label>
            </form>
            <button onClick={handleHeaderColor}>
              <FaBreadSlice />
            </button>
            <button onClick={handleAlign}>
              {titleAlign ? <BiAlignLeft /> : <BiAlignMiddle />}
            </button>
            {onImgMode && (
              <button onClick={removeImg}>
                <RiDeleteBin2Line />
              </button>
            )}
          </EditHeaderBtn>
          {headerColorMode && (
            <HeaderColorBtn>
              <button onClick={nextColor}>
                <AiOutlineArrowLeft />
              </button>
              <button onClick={prevColor}>
                <AiOutlineArrowRight />
              </button>
            </HeaderColorBtn>
          )}
        </HeaderWrapper>
      </EditorHeader>
      <MDEditorWrapper data-color-mode="light">
        <MDEditor
          value={value}
          onChange={setValue}
          hideToolbar={true}
          enableScroll={true}
          visibleDragbar={false}
          height={800}
        />
      </MDEditorWrapper>
    </>
  );
};

export default Write;

const MDEditorWrapper = styled.div`
  margin: 0 24% 5% 24%;
`;

const BigTitle = styled.input`
  font-size: 50px;
  margin-bottom: 0.5rem;
`;

const SmallTitle = styled.input`
  font-size: medium;
  font-weight: 300;
`;

const EditHeaderBtn = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  position: absolute;
  right: 0;
`;

const HeaderColorBtn = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'space-between')}
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 0.5rem;
`;

const InputTitle = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')}
  position: absolute;

  input {
    -webkit-appearance: none;

    ::placeholder {
      color: white;
    }

    background: transparent;
    outline: none;
    border: 0;
    text-align: center;
    caret-color: white;
    color: white;
  }

  ${props =>
    props.changeAlign &&
    css`
      left: 0;
      bottom: 0;
      margin-bottom: 6rem;
      align-items: flex-start;
      margin-left: 8%;

      input {
        text-align: left;
      }
    `}
`;

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  position: relative;
  height: 100%;
  margin: 0 19%;
`;

const EditorHeader = styled.header`
  width: 100vw;
  height: 40vh;
  transition: 300ms;
  margin-bottom: 3rem;

  button,
  form {
    background: transparent;
    border: 0;
    font-size: 24px;
    margin-bottom: 1rem;
    cursor: pointer;
    color: white;

    &:hover {
      color: white;
      opacity: 0.5;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  input {
    ::placeholder {
      opacity: 0.6;
    }
  }

  ${({ previewURL }) => css`
    background-image: url(${previewURL});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `}

  ${props =>
    !props.onImgMode &&
    css`
      background-image: url('');
    `}

  ${({ setColor }) => css`
    background-color: ${setColor};
  `}

  ${props =>
    !props.headerColorMode &&
    css`
      margin-bottom: 0;
      background-color: white;
      transition: 500ms;

      input {
        caret-color: #ccc;
        color: black;

        ::placeholder {
          color: #ccc;
          opacity: 1;
        }
      }

      button,
      form {
        color: #999;

        &:hover {
          color: ${({ theme }) => theme.colors.mint};
          opacity: 1;
        }
      }
    `}
`;
