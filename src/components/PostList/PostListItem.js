import React from 'react';
import styled from 'styled-components';

const PostListItem = () => {
  return (
    <Li>
      <Title>UX 디자인 프로세스에서 러프스케치의 역할은?</Title>
      <DescWarp>
        <em>전민수 UX TV 시리즈</em>
        <IconBar />
        <span>
          안녕하세요. 전민수 UX 컨설턴트입니다. 전민수 UX TV 유튜브를 통해
          여러분을 만나게 되어 정말 반갑습니다. 하루에 (오전, 오후, 저녁) 3회에
          걸쳐 업로드 예정입니다. 오늘의 오전 유튜브 강좌는, 신규 서비스 오픈 시
          퍼소나, 러프스케치, 리서치, 어피니티 다이어그램, IA, 와이어프레임 등은
          어떤 순서로 진행하나요?(UX 디자인 프로세스에서 러프
        </span>
      </DescWarp>
      <SubDesc>
        <span>댓글 0</span>
        <IcoDot />
        <span>1시간 전</span>
        <IcoDot />
        <span>by UX 컨설턴트 전민수</span>
      </SubDesc>
    </Li>
  );
};

export default PostListItem;

const Li = styled.li`
  position: relative;
  min-height: 11.25rem;
  padding: 1.875rem ${theme => theme.theme.paddings.xl};
  font-size: ${theme => theme.theme.fontSizes.small};
  line-height: 1.313rem;
  color: #666;
  border-bottom: ${theme => theme.theme.borders.gray};
  background-color: ${theme => theme.theme.colors.white};
`;

const Title = styled.strong`
  font-size: ${theme => theme.theme.fontSizes.xl};
  font-weight: ${theme => theme.theme.fontWeights.regular};
`;

const DescWarp = styled.div`
  overflow: hidden;
  padding-top: 0.625rem;
  height: 3rem;
  line-height: 1.3rem;
  font-size: ${theme => theme.theme.fontSizes.small};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const SubDesc = styled.div`
  overflow: hidden;
  display: block;
  padding-top: 20px;
  font-size: ${theme => theme.theme.fontSizes.xs};
  color: ${theme => theme.theme.colors.lightGray};
`;

const IconBar = styled.span`
  display: inline-block;
  width: 0.063rem;
  height: 0.688rem;
  margin: ${theme => theme.theme.margins.small}
    ${theme => theme.theme.margins.base} 0;
  vertical-align: top;
  background-color: ${theme => theme.theme.colors.lightGray};
`;

const IcoDot = styled.span`
  display: inline-block;
  width: 0.125rem;
  height: 0.125rem;
  margin: ${theme => theme.theme.margins.base}
    ${theme => theme.theme.margins.small} 0;
  vertical-align: text-top;
  background-color: ${theme => theme.theme.colors.lightGray};
`;
