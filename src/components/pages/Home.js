import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

function Home(){
  return(
    <>
      <HeroSection/>
      { <h1 className='home'>RINI<i class="fas fa-heart"></i></h1>}
      <Cards/>
    </>
  )
}
export default Home;
