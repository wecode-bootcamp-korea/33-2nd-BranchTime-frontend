import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { BsChatDots } from 'react-icons/bs';
import PostDetailMentTextarea from './PostDetailMentTextarea';

const PostDetailComment = ({ data }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [file, setFile] = useState({});
  const [previewURL, setPreviewURL] = useState('');
  const [preview, setPreview] = useState(null);
  const [commentValue, setCommentValue] = useState('');
  const [comment, setComment] = useState([]);
  const fileRef = useRef();

  useEffect(() => {
    if (previewURL === '') {
      return;
    } else {
      setPreview(
        <img className="img_preview" src={previewURL} alt="임시이미지" />
      );
    }
  }, [previewURL, file]);

  useEffect(() => {
    fetch('/data/COMMENT_LIST.json')
      .then(res => res.json())
      .then(data => setComment(data));
  }, []);

  const handleFileOnChange = e => {
    e.preventDefault();

    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.lQ0EbuckiDJz6Ep5ZCQQ4dEp7q09ePyuW2tm4ijSo4Y';

    const files = e.target.files[0];
    const reader = new FileReader();

    const formData = new FormData();

    formData.append('comment_image', files);
    formData.append('content', commentValue);

    reader.onloadend = () => {
      setFile(files);
      setPreviewURL(reader.result);
    };

    fetch('http:///10.58.1.170:8001/contents/53/comment', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: formData,
    }).then(res => {
      if (res.ok) {
        // console.log('성공!');
      } else {
        alert('잘못된 요청입니다');
      }
    });

    if (files) reader.readAsDataURL(files);
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

  const onRemove = comment_id => {
    // e.preventDefault();
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.lQ0EbuckiDJz6Ep5ZCQQ4dEp7q09ePyuW2tm4ijSo4Y';

    fetch(`http://10.58.1.170:8001/contents/comment/${comment_id}`, {
      headers: {
        Authorization: token,
      },
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        setFile('');
      }
    });
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
            댓글 <CommentSpan>{data.length}</CommentSpan>
          </Label>
          <Hr />
          <form>
            {data.map(
              ({ comment_id, comment_image, user_name, comment_content }) => (
                <CommentList key={comment_id}>
                  {comment_image && (
                    <PreviewImg>
                      <img src={comment_image} alt="임시사진" />
                    </PreviewImg>
                  )}
                  <CommentWrap isImage={comment_image !== ''}>
                    <UserName>{user_name}</UserName>
                    <CommentValue>{comment_content}</CommentValue>
                  </CommentWrap>

                  <Delete onClick={() => onRemove(comment_id)}>삭제</Delete>
                </CommentList>
              )
            )}

            <PostDetailMentTextarea
              commentValue={commentValue}
              userCommentChange={userCommentChange}
              preview={preview}
              fileRef={fileRef}
              handleFileOnChange={handleFileOnChange}
              handleFileButtonClick={handleFileButtonClick}
              commentSubmit={commentSubmit}
            />
          </form>
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
