import React from 'react';
import Cta from './Cta';
import Slider from './Slider/index.js';
import Fees from './Fees';
import { Wrapper, AbsoluteWrapper } from '../../global/Wrapper';
import Meetings from "./Meetings";
import Sponsors from "./Sponsors";
import Header from './Header';
import Director from "./Director";
import Footer from "../Footer";

const Home = () => {
  return (
    <AbsoluteWrapper>
      <Header />
      <Wrapper>
        <Cta />
        <Slider />
      </Wrapper>
      <Fees />
      <Director />
      <Meetings />
      <Sponsors />
      <Footer />
    </AbsoluteWrapper>
  )
};

export default Home;
