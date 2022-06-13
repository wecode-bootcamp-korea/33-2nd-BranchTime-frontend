import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SuggestionCont = () => {
  const [Suggestion, setSuggestion] = useState([]);
  const [isVaildOpen, setIsVaildOpen] = useState(false);

  useEffect(() => {
    fetch('/data/SUGGESTION_TIP.json')
      .then(res => res.json())
      .then(data => setSuggestion(data));
  }, []);

  const handleOpen = () => {
    setIsVaildOpen(!isVaildOpen);
  };

  return (
    <ProposeCont>
      <InfoDetail>
        <Textbox>
          <Title>
            전기환
            <br /> 작가에게 제안하기
          </Title>
          <P>인터랙티브 개발자</P>
          <InfoWriter>
            <Span>디자인</Span>
            <IcoDot />
            <Span>저널리즘</Span>
            <IcoDot />
            <Span>IT</Span>
          </InfoWriter>
        </Textbox>

        <ImgBox>
          <ImgWrap>
            <img src="/images/bread.png" alt="임시사진" />
          </ImgWrap>
          <ImgBg />
        </ImgBox>
      </InfoDetail>

      <Dl isVaildOpen={isVaildOpen}>
        <Dt>제안 팁</Dt>
        <Dd>
          <Ddtitle onClick={handleOpen}>
            출간, 강연, 협업 제안은 브런치에서!
            {isVaildOpen ? (
              <ArrowIcon>
                <IoIosArrowUp size="20" color="#969696" />
              </ArrowIcon>
            ) : (
              <ArrowIcon>
                <IoIosArrowDown size="20" color="#969696" />
              </ArrowIcon>
            )}
          </Ddtitle>

          {isVaildOpen && (
            <Ul>
              {Suggestion.map(({ id, title, desc }) => (
                <DlLi key={id}>
                  <DlLiNum>{id}</DlLiNum>
                  <DlLiStrong>{title}</DlLiStrong>
                  <DlLiP>{desc}</DlLiP>
                </DlLi>
              ))}
            </Ul>
          )}
        </Dd>
      </Dl>
    </ProposeCont>
  );
};

export default SuggestionCont;

const ProposeCont = styled.div`
  width: 32.625rem;
  margin: 0 auto;
`;

const InfoDetail = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'space-between')};
  height: 12.5rem;
  padding: 0 0 ${({ theme }) => theme.paddings.xxxl};
`;

const Textbox = styled.div``;

const Title = styled.h1`
  font-family: 'Nanum Myeongjo', serif;
  font-size: 1.875rem;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.056rem;
  line-height: 2.5rem;
`;

const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #666;
  line-height: 1.25rem;
  margin-top: ${({ theme }) => theme.margins.base};
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #959595;
`;

const IcoDot = styled.span`
  display: inline-block;
  width: 0.125rem;
  height: 0.125rem;
  margin: ${({ theme }) => theme.margins.base}
    ${({ theme }) => theme.margins.small} 0;
  vertical-align: top;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const InfoWriter = styled.div``;

const ImgBox = styled.div`
  position: relative;
  width: 14.063rem;
  height: 100%;
`;

const ImgWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  background-color: #000;
  overflow: hidden;
  z-index: 10;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ImgBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  background-color: #f4eadf;
  opacity: 0.4;
`;

const Dl = styled.dl`
  position: relative;
  ${({ theme }) => theme.flex.flexBox('', '', '')};
  background-color: ${({ isVaildOpen }) => (isVaildOpen ? '#fff' : '#f6f0e9')};
  border: 1px solid #eee;
`;

const Dt = styled.dt`
  width: 5.438rem;
  padding: 1.5rem 0 0 1.188rem;
  font-size: 0.813rem;
  line-height: 0.813rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Dd = styled.dd``;

const Ddtitle = styled.div`
  width: 100%;
  padding: 1.5rem 1.25rem 1.438rem 1.188rem;
  font-size: 0.813rem;
  line-height: 0.813rem;
  overflow: hidden;
`;

const ArrowIcon = styled.span`
  position: absolute;
  right: 0.875rem;
  top: 1.25rem;
`;

const Ul = styled.ul`
  padding: 0 1.125rem 0.938rem;
  background-color: ${({ isVaildOpen }) => (isVaildOpen ? '#f6f0e9' : '#fff')};
`;

const DlLi = styled.li`
  position: relative;
  padding: 0.188rem 0 0.688rem 2.375rem;
`;

const DlLiNum = styled.div`
  position: absolute;
  top: 0.438rem;
  left: 0;
  width: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  font-size: 0.813rem;
  text-align: center;
  color: #ccbba9;
  border: 1px solid #ccbba9;
  border-radius: 50%;
`;

const DlLiStrong = styled.strong`
  font-size: 0.813rem;
  line-height: 2;
  color: ${({ theme }) => theme.colors.black};
`;

const DlLiP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #959595;
`;
