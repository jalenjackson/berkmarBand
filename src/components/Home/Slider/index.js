import React from 'react';
import { Carousel } from 'antd';
import './index.css';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  min-width: auto;
  min-height: auto;
  width: 100%;
  height: 100%;
`;

const Slider = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Carousel slidesToShow={ 2 } autoplay={ true }>
        <ImageWrapper className='slide1'>
          <Image src={ require('../../../images/pic1.webp') } />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={ require('../../../images/pic2.webp') } />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={ require('../../../images/pic3.webp') } />
        </ImageWrapper>
      </Carousel>
    </div>
  )
};

export default Slider;
