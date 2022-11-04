import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';
import Layout from '../components/layout/Layout';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout title={'전체차량'} />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route element={<Layout title={'차량상세'} />}>
          <Route path="/car/:id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
