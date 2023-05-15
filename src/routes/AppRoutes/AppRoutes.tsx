import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;