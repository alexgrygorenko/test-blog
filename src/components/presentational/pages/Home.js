import React from 'react';
import corgi from './cute-corgi.jpg';

const Home = () => {
  return (
    <div className='container large text-center'>
      <h4>Hello, and welcome to my awesome blog</h4>
      <img className='round-img' src={corgi} alt='Cute Corgi' />
    </div>
  );
};

export default Home;
