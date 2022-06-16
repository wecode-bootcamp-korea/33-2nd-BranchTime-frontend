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
import MyPage from './pages/MyPage/MyPage';
import UserPage from './pages/userPage/UserPage';
import MyPageProfileEdit from './pages/MyPage/MyPageProfileEdit';
import BookAnimation from './pages/BookAnimation/BookAnimation';
import Suggestion from './pages/Suggestion/Suggestion';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post_list/:id" element={<PostList />} />
        <Route path="/post_detail/:id" element={<PostDetail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirect />} />
        <Route path="/oauth/callback/github" element={<GithubRedirect />} />
        <Route path="/oauth/callback/naver" element={<NaverRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/userPage/:id" element={<UserPage />} />
        <Route path="/myPageProfileEdit" element={<MyPageProfileEdit />} />
        <Route path="/bookAnimation" element={<BookAnimation />} />
        <Route path="/write" element={<Write />} />
        <Route path="/suggestion" element={<Suggestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
