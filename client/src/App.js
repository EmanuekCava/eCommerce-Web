import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

import Header from './app/components/elements/header'
import Categories from './app/components/categories/categories';
import Footer from './app/components/elements/footer'

import Index from './app/routes/index.routes';
import Product from './app/routes/product.routes';
import Sugestion from './app/routes/sugestion.routes';
import Category from './app/routes/category.routes'

import store from './app/store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='container p-4'>
          <Header />
        </div>
        <div className='container-md p-4 pt-2'>
          <Categories />
        </div>
        <div className='m-4'>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/sugestion/:id' element={<Sugestion />} />
            <Route path='/category/:category' element={<Category />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
