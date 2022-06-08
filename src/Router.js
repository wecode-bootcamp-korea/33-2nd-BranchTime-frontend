import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/main/Main';
import PostList from './pages/PostList/PostList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post_list" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
