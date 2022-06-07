import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
