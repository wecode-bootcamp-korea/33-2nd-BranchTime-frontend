import React from 'react';
import styled, { css } from 'styled-components';
import { GiTreeBranch } from 'react-icons/gi';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { AiFillGithub, AiFillFacebook, AiOutlineClose } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useNavigate } from 'react-router-dom';
import { KAKAO_AUTH_URL } from './OAuth';

const Login = ({ quitLogin }) => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <LoginBody>
        <LoginModal>
          <LoginCarousel>
            <LoginLogo size={44} />
            <LoginSlider {...settings}>
              {LOGIN_CAROUSEL.map(({ id, src, title, desc }) => {
                return (
                  <div key={id}>
                    <div>
                      <LoginImg src={src} alt="login" />
                    </div>
                    <div>
                      <CarouselTitle>{title}</CarouselTitle>
                      <CarouselDesc>{desc}</CarouselDesc>
                    </div>
                  </div>
                );
              })}
            </LoginSlider>
          </LoginCarousel>
          <LoginStart>
            <LoginQuit size={30} onClick={quitLogin} />
            <StartBox>
              <StartTitle>브랜치타임 시작하기</StartTitle>
            </StartBox>
            {SOCIAL_LOGIN.map(({ id, icon, text, color, bgcolor }) => {
              return (
                <SocialLoginBox
                  key={id}
                  color={color}
                  bgcolor={bgcolor}
                  href={KAKAO_AUTH_URL}
                >
                  <span>{icon}</span>
                  <SocialSpan>{text}</SocialSpan>
                </SocialLoginBox>
              );
            })}
          </LoginStart>
        </LoginModal>
      </LoginBody>
    </div>
  );
};

export default Login;

const LoginBody = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10000;
`;

const LoginModal = styled.div`
  height: 38.125rem;
  width: 62.5rem;
  border: 1px solid black;
  position: absolute;
  overflow: hidden;
  display: flex;
  border-radius: 0.938rem;
`;

const LoginCarousel = styled.div`
  width: 31.25rem;
  padding: 5.875rem 0 6.313rem;
  background-color: white;
`;

const LoginLogo = styled(GiTreeBranch)`
  font-size: 1.875rem;
  padding: 0.313rem;
  color: white;
  background-color: black;
  border-radius: 50%;
  margin-left: 6.25rem;
  margin-bottom: 4.063rem;
`;

const LoginStart = styled.div`
  width: 31.25rem;
  padding: 5.875rem 2.938rem 4.5rem;
  background-color: #f8f8f8;
`;

const LoginQuit = styled(AiOutlineClose)`
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  color: #999;
  cursor: pointer;
`;

const StartBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.375rem;
  height: 3.25rem;
`;

const StartTitle = styled.strong`
  font-size: 1.375rem;
  margin-bottom: 1.125rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ebebeb;
`;

const SocialBox = css`
  height: 3.75rem;
  ${theme => theme.theme.flex.flexBox()}
  border-radius: 0.313rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const SocialLoginBox = styled.a`
  ${SocialBox}
  color: ${props => props.color};
  background-color: ${props => props.bgcolor};
`;
const SocialSpan = styled.span`
  margin-left: 0.5rem;
`;

const LoginSlider = styled(Slider)`
  height: 17rem;
  width: 31.25rem;
  display: flex;
  text-align: center;

  .slick-slide slick-active slick-current {
    ${theme => theme.theme.flex.flexBox()}
  }

  .slick-slide img {
    display: inline;
  }
`;

const CarouselTitle = styled.strong`
  font-size: 1.688rem;
  line-height: 0.5;
`;

const CarouselDesc = styled.p`
  margin: 0.5rem;
  font-size: 0.938rem;
  color: #999;
`;

const LoginImg = styled.img`
  margin-right: 0;
  width: 16.875rem;
  height: 10.75rem;
  margin-bottom: 2rem;
`;

const LOGIN_CAROUSEL = [
  {
    id: 1,
    src: 'images/Login/login-1.png',
    title: '개발자의 삶',
    desc: '이게 왜 되지?',
  },
  {
    id: 2,
    src: 'images/Login/login-2.png',
    title: '노트북은 맥북',
    desc: 'M1은 신이야!',
  },
  {
    id: 3,
    src: 'images/Login/login-3.png',
    title: '오점뭐?',
    desc: '점심은 몹시 중요하지',
  },
];

const SOCIAL_LOGIN = [
  {
    id: 1,
    icon: <RiKakaoTalkFill size={22} />,
    text: '카카오 계정으로 시작하기',
    bgcolor: '#ffe500',
  },
  {
    id: 2,
    icon: <AiFillGithub size={22} />,
    text: '깃허브 계정으로 시작하기',
    color: 'white',
    bgcolor: 'black',
  },
  {
    id: 3,
    icon: <AiFillFacebook size={22} />,
    text: '페이스북 계정으로 시작하기',
    color: 'white',
    bgcolor: '#0674e8',
  },
  {
    id: 4,
    icon: <SiNaver size={22} />,
    text: '네이버 계정으로 시작하기',
    color: 'white',
    bgcolor: '#03cf5b',
  },
  {
    id: 5,
    icon: <FcGoogle size={22} />,
    text: '구글 계정으로 시작하기',
    bgcolor: 'white',
  },
];
