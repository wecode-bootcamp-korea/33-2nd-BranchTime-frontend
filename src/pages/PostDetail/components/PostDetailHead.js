import React from 'react';
import styled from 'styled-components';
import Nav from '../../../components/Nav/Nav';
import PostDetailNav from './PostDetailNav';

const PostDetailHead = ({ data }) => {
  return (
    <Cover>
      <CoverImg>
        <Titlewarp>
          <CoverTitleWarp>
            <CoverTitle>UX 디자인 프로세스에서 러프스케치의 역할은?</CoverTitle>
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
  );
};

export default PostDetailHead;

const PostDetailHeadWarpper = styled.div``;

const Cover = styled.section`
  position: relative;
  width: 100%;
  height: 28.125rem;
  z-index: 0;
  overflow: hidden;
`;

const CoverImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${({ image }) => image});
`;

const CoverInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.3;
  background-color: #000;
`;

const Titlewarp = styled.section`
  position: relative;
  width: 43.75rem;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  z-index: 100;
`;

const CoverTitleWarp = styled.div``;

const CoverPositionWrap = styled.div`
  position: absolute;
  bottom: 80px;
  left: 0;
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
