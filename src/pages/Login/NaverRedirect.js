import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GiTreeBranch } from 'react-icons/gi';
import { BASE_URL } from '../../config';

const NaverRedirect = () => {
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');
  const navigate = useNavigate();

  const getToken = () => {
    fetch(`${BASE_URL}users/kakao?code=${code}`)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        navigate('/');
      });
  };

  useEffect(() => {
    getToken();
  });

  return (
    <RedirectBody>
      <h1>
        Loading...
        <LoginLogo />
      </h1>
      <Spinner />
    </RedirectBody>
  );
};

export default NaverRedirect;

const RedirectBody = styled.div`
  height: 100vh;
  ${theme => theme.theme.flex.flexBox()}
  flex-direction: column;

  h1 {
    font-size: 80px;
    animation: blink-effect 2s linear infinite;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;

    @keyframes blink-effect {
      50% {
        opacity: 0;
      }
    }
  }
`;

const Spinner = styled.div`
  margin-top: 5rem;
  width: 150px;
  height: 150px;
  border: 10px solid lightgray;
  border-radius: 50%;
  border-top: 10px solid white;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoginLogo = styled(GiTreeBranch)`
  font-size: 3rem;
  padding: 0.313rem;
  color: white;
  background-color: black;
  border-radius: 50%;
`;
