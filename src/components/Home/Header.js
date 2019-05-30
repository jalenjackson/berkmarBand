import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from "react-spring";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background: rgb(245,245,255);
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  filter: blur(5px);
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  transform: scale(1.2)
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderFont = styled.h1`
  font-size: 43px;
  color: white;
`

const Header = () => {
  return (
    <Wrapper>
      <Overlay>
        <HeaderFont>Berkmar Band Booster Club</HeaderFont>
      </Overlay>
      <Image src={ require('../../images/homeHeader.jpg') } />
    </Wrapper>
  )
};

export default Header;
