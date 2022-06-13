import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const url = new URL(window.location.href);

  const code = url.searchParams.get('code');
  const navigate = useNavigate();

  const getToken = () => {
    fetch(`http://10.58.4.36:8000/users/kakao?code=${code}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        navigate('/main');
      });
  };

  useEffect(() => {
    getToken();
  });

  return <div>Redirect</div>;
};

export default Redirect;
