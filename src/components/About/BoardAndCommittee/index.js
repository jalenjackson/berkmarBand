import React from 'react';
import {Card} from "antd";
import {CardOverwrite, Wrapper} from "../../../global/Wrapper";
import Footer from "../../Footer";
import styled from "styled-components";
import {animated, useSpring} from "react-spring";
import { AbsoluteWrapper } from "../../../global/Wrapper";


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

const BoardAndCommittee = () => {
  return (
    <AbsoluteWrapper>
      <Header>
        <Overlay>
          <HeaderText>The Board and committee chairs</HeaderText>
        </Overlay>
        <Image src={ require('../../../images/boardOfDirectors.jpg') } />
      </Header>
      <Wrapper>
        <Card style={ CardOverwrite }>
          <h1>Berkmar Band Boosters</h1>
          <p>Berkmar Band Boosters is a registered 501(c)(3) charitable organization. We are a volunteer parent organization with the purpose of supporting the Berkmar High School band programs, which include Marching Band, Color Guard, Jazz Band, Pep Band, and Concert Band. Currently, the Berkmar Band Booster organization operates with a structure of officers and specific-purpose committees.  The officers make up the Executive Board and work directly with the Band Director to accomplish the stated purposes of the Band Booster organization.</p>
          <h2>2017-2018 Board Members: </h2>
          <ul>
          <li>President: Betty Anderson </li>
          <li>Vice President: Martinique Campbell</li>
          <li>Treasurer: Rayon Murray</li>
          <li>Secretary: </li>
          </ul>
        </Card>
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default BoardAndCommittee;
