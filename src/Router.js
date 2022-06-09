import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav/Nav';
import Main from './pages/main/Main';
import PostList from './pages/PostList/PostList';
import PostDetail from './pages/PostDetail/PostDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/main" element={<Main />} />
        <Route path="/post_list" element={<PostList />} />
        <Route path="/post_detail" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
