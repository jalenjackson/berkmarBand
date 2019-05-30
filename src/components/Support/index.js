import React from 'react';
import { AbsoluteWrapper, Wrapper } from "../../global/Wrapper";
import Footer from "../Footer";
import styled from "styled-components";

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
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
  z-index: 2;
  background: rgba(0, 0, 0, 0.7)
`;

const HeaderText = styled.h1`
  font-size: 35px;
  width: 35%;
  color: white;
  transform: translate(100px, 100px)
`;

const P = styled.p`
  font-size: 18px;
`

const Support = () => {
  return (
    <AbsoluteWrapper>
      <Header>
        <Overlay>
          <HeaderText>Support The Band</HeaderText>
        </Overlay>
        <Image src={ require('../../images/drums.jpg') } />
      </Header>
      <Wrapper>
        <P>All parents of a Berkmar High School band student are a part of the Band Boosters and are an integral component to the success of the band program.  As a parent of a BHS band student, you have a unique opportunity to be involved in the organization.  We welcome families to support the band through volunteering to serve on a committee. Throughout the year, we need help at events, providing food donations, conessions, chaperoning trips, rasing funds etc. Your time and dedication to the BHS Band are appreciated!</P>
        <P>Any adult interested in supporting the Berkmar High School Band Programs is eligible for membership in the organization including grandparents and business owners.</P>
        <P>The BHS Band Boosters holds regular monthly meeting in the Berkmar High School band room to answer parent questions regarding the band program. </P>
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default Support;
