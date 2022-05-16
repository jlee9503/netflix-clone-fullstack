import React from 'react';
import Navbar from './Navbar';
import Row from './Row';
import Footer from './Footer';
import Banner from './Banner';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />

      <Banner/>

      <div className='row-container'>
        <Row />
        <Row />
        <Row />
        <Row />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
