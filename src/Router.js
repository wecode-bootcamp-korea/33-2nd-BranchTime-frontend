import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav/Nav';
import Main from './pages/main/Main';
import PostList from './pages/PostList/PostList';
import PostDetail from './pages/PostDetail/PostDetail';
import Write from './pages/write/Write';
import KakaoRedirect from './pages/Login/KakaoRedirect';
import Login from './pages/Login/Login';
import GithubRedirect from './pages/Login/GithubRedirect';
import NaverRedirect from './pages/Login/NaverRedirect';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/post_list/:id" element={<PostList />} />
        <Route path="/post_detail" element={<PostDetail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirect />} />
        <Route path="/oauth/callback/github" element={<GithubRedirect />} />
        <Route path="/oauth/callback/naver" element={<NaverRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
