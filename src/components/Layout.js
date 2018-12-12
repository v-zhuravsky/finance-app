import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="container">
        { children }
      </section>
    </>
  );
};

export default Layout;