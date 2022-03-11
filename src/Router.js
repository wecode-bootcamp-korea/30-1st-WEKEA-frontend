import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import ItemList from './pages/ItemList/ItemList';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Cart from './pages/cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/itemlist/:id" element={<ItemList />} />
        <Route path="/itemdetail/:id/" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
