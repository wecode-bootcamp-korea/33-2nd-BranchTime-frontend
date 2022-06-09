import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { BsChatDots } from 'react-icons/bs';
import PostDetailMentTextarea from './PostDetailMentTextarea';

const PostDetailComment = () => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [file, setFile] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [preview, setPreview] = useState(null);
  const [commentValue, setCommentValue] = useState('');
  const [comment, setComment] = useState([]);
  const fileRef = useRef();

  useEffect(() => {
    if (file !== '')
      setPreview(
        <img className="img_preview" src={previewURL} alt="임시이미지" />
      );
    return () => {};
  }, [previewURL, file]);

  useEffect(() => {
    fetch('/data/COMMENT_LIST.json')
      .then(res => res.json())
      .then(data => setComment(data));
  }, []);

  // TODO : 백엔드 통신 예정
  // const onChangeImg = (e) => {
  //   e.preventDefault();

  //   if(e.target.files){
  //     const uploadFile = e.target.files[0]
  //     const formData = new FormData()
  //     formData.append('files',uploadFile)

  // axios({
  //   method: 'post',
  //   url: '/api/files/images',
  //   data: formData,
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  //   }
  // }

  const handleFileOnChange = e => {
    e.preventDefault();

    const file = e.target.files[0];
    const reader = new FileReader();

    const formData = new FormData();
    formData.append('files', setFile);

    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleFileButtonClick = e => {
    e.preventDefault();
    fileRef.current.click();
  };

  const handleCommentToggle = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const userCommentChange = e => {
    setCommentValue(e.target.value);
  };

  const commentId = useRef(2);
  const commentSubmit = e => {
    e.preventDefault();

    setComment([
      ...comment,
      {
        id: commentId.current,
        userName: 'Lemon',
        text: commentValue,
        imgSrc: previewURL,
      },
    ]);

    setCommentValue('');

    commentId.current += 1;
  };

  const onRemove = id => {
    setComment(comment.filter(ment => ment.id !== id));
  };

  return (
    <PostDetailCommentWrapper>
      <CommentBtn>
        <Button onClick={handleCommentToggle}>
          <BsChatDots size={20} />
          <Span>댓글</Span>
        </Button>
      </CommentBtn>

      {isCommentOpen && (
        <section>
          <Label>
            댓글 <CommentSpan>{comment.length}</CommentSpan>
          </Label>
          <Hr />

          {comment.map(({ id, userName, text, imgSrc }) => (
            <CommentList key={id}>
              {imgSrc && (
                <PreviewImg>
                  <img src={previewURL} alt="임시사진" />
                </PreviewImg>
              )}
              <CommentWrap isImage={imgSrc !== ''}>
                <UserName>{userName}</UserName>
                <CommentValue>{text}</CommentValue>
              </CommentWrap>

              <Delete onClick={() => onRemove(id)}>삭제</Delete>
            </CommentList>
          ))}

          <PostDetailMentTextarea
            commentValue={commentValue}
            userCommentChange={userCommentChange}
            preview={preview}
            fileRef={fileRef}
            handleFileOnChange={handleFileOnChange}
            handleFileButtonClick={handleFileButtonClick}
            commentSubmit={commentSubmit}
          />
        </section>
      )}
    </PostDetailCommentWrapper>
  );
};

export default PostDetailComment;

const PostDetailCommentWrapper = styled.section`
  margin: 0 auto;
  width: 43.75rem;
`;

const CommentBtn = styled.section`
  ${theme => theme.theme.flex.flexBox('', '', 'flex-end')}
  margin: 5rem 0 3.375rem 0;
`;

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

const Span = styled.span`
  margin-left: ${({ theme }) => theme.margins.small};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.813rem;
`;

const CommentSpan = styled.span`
  font-weight: bold;
  color: ${theme => theme.theme.colors.mint};
`;

const Hr = styled.hr`
  margin-bottom: 0;
  border: 0;
  height: 0.05rem;
  background-color: #eee;
`;

const CommentList = styled.div`
  position: relative;
  padding: 1.875rem 1rem;
  border-bottom: 1px solid #eee;
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}

  :hover {
    background-color: #f8f8f8;
  }
`;

const CommentWrap = styled.div`
  ${({ isImage }) => {
    if (isImage) {
      return css`
        padding-left: 6.875rem;
      `;
    }
  }}
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #333;
`;

const CommentValue = styled.p`
  padding: 0.563rem 1.25rem 0 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.375rem;
`;

const Delete = styled.button`
  position: absolute;
  top: 1.875rem;
  right: 1.25rem;
  color: #888;
  background-color: transparent;
  border: none;
  cursor: pointer;
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
