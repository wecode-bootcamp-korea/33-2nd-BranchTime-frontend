import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/main/Main';
import PostListBody from './components/PostList/PostListBody';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post_list" element={<PostListBody />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
