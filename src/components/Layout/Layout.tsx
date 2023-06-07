import React from 'react';
import { Breadcrumb } from 'antd';
import Header from '../Header/Header';
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="border-breadcrumb">
        <Breadcrumb
          items={[
            {
              title: <a href="/">Home</a>,
            },
          ]}
        />
      </div>
    </>
  );
};

export default Layout;