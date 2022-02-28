import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ItemList from "./pages/ItemList/ItemList";
import ItemDetail from "./pages/ItemDetail/ItemDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
