import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../navbar/NavigationBar';

import PrivateRoute from '../PrivateRoute';

const AppLayout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <PrivateRoute>
        <>
          <NavigationBar />
          <Outlet />
        </>
      </PrivateRoute>
    </div>
  );
};

export default AppLayout;
