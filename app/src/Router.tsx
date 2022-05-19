import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function Router() {
  return (
    <Routes>
      <Route path="/admin/signup" element={<Signup />} />
      <Route path="/admin/signin" element={<Login />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
