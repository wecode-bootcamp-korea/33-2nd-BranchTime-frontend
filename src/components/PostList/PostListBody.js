import React from 'react';
import styled from 'styled-components';

const PostListBody = () => {
  return (
    <Body>
      <Wrapper>
        <ul>
          <Li>
            <Title>UX 디자인 프로세스에서 러프스케치의 역할은?</Title>
            <DescWarp>
              <em>전민수 UX TV 시리즈</em>
              <IconBar />
              <Desc>
                안녕하세요. 전민수 UX 컨설턴트입니다. 전민수 UX TV 유튜브를 통해
                여러분을 만나게 되어 정말 반갑습니다. 하루에 (오전, 오후, 저녁)
                3회에 걸쳐 업로드 예정입니다. 오늘의 오전 유튜브 강좌는, 신규
                서비스 오픈 시 퍼소나, 러프스케치, 리서치, 어피니티 다이어그램,
                IA, 와이어프레임 등은 어떤 순서로 진행하나요?(UX 디자인
                프로세스에서 러프
              </Desc>
            </DescWarp>
            <SubDesc>
              <span>댓글 0</span>
              <IcoDot />
              <span>1시간 전</span>
              <span>by UX 컨설턴트 전민수</span>
            </SubDesc>
          </Li>
        </ul>
      </Wrapper>
    </Body>
  );
};
export default PostListBody;

const Body = styled.main`
  padding: 30px 0 111px;
  width: 100%;
  height: 100vh;
  background-color: ${theme => theme.theme.colors.bgGray};
`;

const Wrapper = styled.section`
  width: 940px;
  margin: 0 auto;
`;
const Li = styled.li`
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  min-height: 180px;
  padding: 30px 20px;
  position: relative;
  color: #666;
  font-size: 14px;
  line-height: 21px;
`;

const Title = styled.strong`
  font-size: ${theme => theme.theme.fontSizes.xl};
  font-weight: ${theme => theme.theme.fontWeights.regular};
`;

const DescWarp = styled.div`
  overflow: hidden;
  padding-top: 10px;
  font-size: ${theme => theme.theme.fontSizes.small};

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.3rem;
  height: 3rem;
`;

const IconBar = styled.span`
  background-color: #bfbfbf;
  display: inline-block;
  height: 11px;
  margin: 4px 8px 0;
  vertical-align: top;
  width: 1px;
`;

const Desc = styled.span``;

const SubDesc = styled.div`
  color: #959595;
  display: block;
  font-size: 12px;
  overflow: hidden;
  padding-top: 20px;
`;

const IcoDot = styled.span`
  background-color: #aaa;
  display: inline-block;
  height: 2px;
  margin: 8px 6px 0;
  vertical-align: text-top;
  width: 2px;
`;
