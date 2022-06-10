import React from 'react';
import styled from 'styled-components';

const MyPageContent = ({ postItem }) => {
  const { subject, preview, thumbnail, reply, date } = postItem;
  return (
    <MyPageContentContainer>
      <ColumnContainer>
        <ContentContainer>
          <ContentSubject>{subject}</ContentSubject>
          <ContentPreview>{preview}</ContentPreview>
          <div>
            <ContentReply>댓글{reply}</ContentReply>
            <ContentTime>{date}</ContentTime>
          </div>
        </ContentContainer>
        <ContentThumbnailContainer>
          <ContentThumbnail src={thumbnail} alt="썸네일" />
        </ContentThumbnailContainer>
      </ColumnContainer>
    </MyPageContentContainer>
  );
};

const MyPageContentContainer = styled.div`
  width: 100%;
  padding: 0 25rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 3.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentSubject = styled.div`
  font-size: 1.8rem;
`;

const ContentPreview = styled.div`
  font-size: 1.3rem;
  color: gray;
  text-overflow: ellipsis;
`;

const ContentThumbnailContainer = styled.div`
  margin-left: 4rem;
`;

const ContentReply = styled.span`
  margin-right: 1rem;
  color: gray;
`;

const ContentTime = styled.span`
  color: gray;
`;

const ContentThumbnail = styled.img`
  width: 10rem;
  height: 10rem;
`;
export default MyPageContent;
