import Header from './Header';
import Footer from './Footer'
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout({products}) {
  return (
   <>
        <Header products={products} />
            <main className="pt-20">
                <Outlet />
            </main>
        <Footer />
    </>
   
  )
}

export default MainLayout

