import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GiTreeBranch } from 'react-icons/gi';
import { IoLogoApple } from 'react-icons/io5';

const Footer = () => {
  useEffect(() => {
    fetch('data/Footer.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFooterData(data);
      });
  }, []);

  const [footerData, setFooterData] = useState([]);
  return (
    <FooterWrapper>
      <FooterInner>
        <WrapInfo>
          <LogoDiv>
            <FooterLogo />
            <LogoQuote>
              Talk is cheap. <br />
              Show me the code.
            </LogoQuote>
            <QuoteAuthor>Linus Torvalds</QuoteAuthor>
          </LogoDiv>
          <FooterUl>
            {footerData.map(({ id, name }) => (
              <FooterLi key={id}>
                <FooterA href="#!">{name}</FooterA>
              </FooterLi>
            ))}
          </FooterUl>
        </WrapInfo>
        <WrapCorp>
          <CorpName>® Branch Corp.</CorpName>
          <div>
            <PlayStoreIcon src="images/Footer/google-play.png" />
            <AppleIcon />
          </div>
        </WrapCorp>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  height: 22.063rem;
  background-color: #101010;
  display: flex;
  justify-content: center;
`;

const FooterInner = styled.div`
  height: 15.906rem;
  padding-top: 3rem;
  margin: 0 auto;
`;

const WrapInfo = styled.div`
  height: 10.844rem;
  margin-bottom: 2.188rem;
  display: flex;
  flex-wrap: wrap;
`;

const FooterUl = styled.ul`
  width: 50rem;
  height: 10.844rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const FooterLi = styled.li`
  width: 15rem;
  line-height: 1.063rem;
  margin-bottom: 1.063rem;
  padding-left: 7rem;
  letter-spacing: -0.02em;
  font-size: 0.813rem;
`;

const FooterA = styled.a`
  color: #959595;

  :hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: white;
  }
`;

const FooterLogo = styled(GiTreeBranch)`
  font-size: 1.875rem;
  padding: 0.313rem;
  color: black;
  background-color: white;
  border-radius: 50%;
`;

const LogoDiv = styled.div`
  height: 7.281rem;
  margin-right: 10.375rem;
  margin-top: 0.125rem;
  display: flex;
  flex-direction: column;
  font-style: italic;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

const LogoQuote = styled.q`
  color: white;
  margin-top: 1.063rem;
`;

const QuoteAuthor = styled.span`
  color: #bfbfbf;
  margin-top: 1.063rem;
`;

const WrapCorp = styled.div`
  height: 1.375rem;
  padding-top: 1.438rem;
  border-top: 1px solid #282828;
  display: flex;
  justify-content: space-between;
`;

const CorpName = styled.span`
  color: #bfbfbf;
  font-size: 0.875rem;
  font-style: italic;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

const PlayStoreIcon = styled.img`
  color: white;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const AppleIcon = styled(IoLogoApple)`
  color: white;
  width: 25px;
  height: 25px;
  margin-left: 1rem;
  cursor: pointer;
`;
