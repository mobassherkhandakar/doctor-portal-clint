import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../infoCards/infoCards';
import Servises from '../Servises/Servises';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';

const Home = () => {
  return (
    <div>
      <Banner/>
      <InfoCards/>
      <Servises/>
      <MakeAppoinment/>
    </div>
  );
};

export default Home;