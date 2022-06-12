import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav/Nav';
import Main from './pages/main/Main';
import PostList from './pages/PostList/PostList';
import PostDetail from './pages/PostDetail/PostDetail';
import Write from './pages/write/Write';
import Login from './pages/Login/Login';
import Redirect from './pages/Login/Redirect';
import MyPage from './pages/MyPage/MyPage';
import MyPageProfileEdit from './pages/MyPage/MyPageProfileEdit';
import BookAnimation from './pages/BookAnimation/BookAnimation';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/main" element={<Main />} />
        <Route path="/post_list" element={<PostList />} />
        <Route path="/post_detail" element={<PostDetail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<Redirect />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/myPageProfileEdit" element={<MyPageProfileEdit />} />
        <Route path="/bookAnimation" element={<BookAnimation />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
