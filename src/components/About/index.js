import React from 'react';
import styled from 'styled-components';
import { AbsoluteWrapper } from "../../global/Wrapper";
import { useSpring, animated } from 'react-spring';
import { CardOverwrite, Wrapper } from "../../global/Wrapper";
import { Card } from 'antd';
import Footer from "../Footer";

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: red;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2
`;

const HeaderText = styled.h1`
  font-size: 45px;
  color: white;
  transform: translate(100px, 120px)
`;

const About = () => {
  return (
    <AbsoluteWrapper>
      <Header>
        <Overlay>
          <HeaderText>About Us</HeaderText>
        </Overlay>
        <Image src={ require('../../images/About/maxresdefault.jpg') } />
      </Header>

      <Wrapper>
        <Card style={ CardOverwrite }>
          <h1>Berkmar Band Boosters</h1>
          <p>The Berkmar High School Band Boosters Club is a non profit organization based in Lilburn, GA. Berkmar Boosters have been serving the greater Lilburn community for the last 24 years.  We promote band students and programs, connects parents with other parents and fosters  the band community at BHS.  Our primary activities include promoting and hosting educational and social events, providing organizational and logistical support, and fundraising to help provide educational, enjoyable and rewarding band programs. It is also our desire to volunteer personal time to provide support morally, physically, and financially to enhance the music band program. </p>
        </Card>
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default About;
