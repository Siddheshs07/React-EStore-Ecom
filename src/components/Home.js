import React from 'react';
//import styled from 'styled-components';
import HeroSection from './HeroSection';
import Trusted from './Trusted';
import Services from './Services';
import FeatureProduct from './FeatureProduct';

const Home = () => {
  const data= {
    name: "E-Store",
    Slogan: "Everything At Your DoorStep",
  };

  return <>
  <HeroSection  myData={data}/>
  <FeatureProduct />
  <Services />
  <Trusted />
  
  </> 
  
};
export default Home;
