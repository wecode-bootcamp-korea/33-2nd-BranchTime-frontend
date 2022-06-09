import React from 'react';
import styled from 'styled-components';
import PostDetailNav from './PostDetailNav';

const PostDetailHead = () => {
  return (
    <>
      <PostDetailNav />

      <Cover>
        <CoverImg>
          <Titlewarp>
            <CoverTitleWarp>
              <CoverTitle>
                UX 디자인 프로세스에서 러프스케치의 역할은?
              </CoverTitle>
              <CoverSubTitle>전민수 UX TV 시리즈</CoverSubTitle>
              <CoverDesc>
                <span>by UX 컨설턴트 전민수</span>
                <IcoDot />
                <span>1시간전</span>
              </CoverDesc>
            </CoverTitleWarp>

            <CoverInner />
          </Titlewarp>
        </CoverImg>
      </Cover>
    </>
  );
};

export default PostDetailHead;

const Cover = styled.section`
  width: 100%;
  height: 28.125rem;
  z-index: 0;
  overflow: hidden;
`;

const CoverImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-attachment: fixed;
  background-size: cover;
  background-image: url('https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/aLhx/image/oNPa0U0k_jv748YheykI4ZweWKs.jpg');
`;

const CoverInner = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-color: #000;
`;

const Titlewarp = styled.section`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  z-index: 100;
`;

const CoverTitleWarp = styled.div`
  position: absolute;
  left: 18%;
  bottom: ${theme => theme.theme.margins.xxxxl};
  z-index: 100;
`;

const CoverTitle = styled.h1`
  font-size: ${theme => theme.theme.fontSizes.titleSize};
  line-height: 2.5rem;
`;

const CoverSubTitle = styled.p`
  padding-top: ${theme => theme.theme.margins.base};
`;

const CoverDesc = styled.div`
  margin-top: ${theme => theme.theme.margins.xxxxl};
  font-size: ${theme => theme.theme.fontSizes.xs};
`;

const IcoDot = styled.span`
  display: inline-block;
  width: 0.125rem;
  height: 0.125rem;
  margin: ${theme => theme.theme.margins.base}
    ${theme => theme.theme.margins.small} 0;
  vertical-align: text-top;
  background-color: ${theme => theme.theme.colors.white};
`;
