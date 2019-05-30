import React from 'react';
import { AbsoluteWrapper, Wrapper } from "../../../global/Wrapper";
import Cta from "../../Home/Cta";
import ImageGallery from 'react-image-gallery';
import Footer from "../../Footer/index";

const bandCamp = [];
const concession = [];
const uniform = [];

for (let i = 1; i < 6; i++) {
  bandCamp.push({
    original: require(`../../../images/bandCamp/${ i }.webp`),
    thumbnail: require(`../../../images/bandCamp/${ i }.webp`),
  })
}

for (let i = 1; i < 10; i++) {
  concession.push({
    original: require(`../../../images/concession/${ i }.webp`),
    thumbnail: require(`../../../images/concession/${ i }.webp`),
  })
}

for (let i = 1; i < 9; i++) {
  uniform.push({
    original: require(`../../../images/uniformCleaning/${ i }.webp`),
    thumbnail: require(`../../../images/uniformCleaning/${ i }.webp`),
  })
}

const Gallery = props => {
  return (
    <AbsoluteWrapper>
      <Wrapper>
        <Cta />
        <h1 style={{ marginTop: 40 }}>Thank you volunteers!</h1>
        <div style={{ marginTop: 50, width: '45%' }}>
          <h1>Band Camp</h1>
          <p>Thank you to all of the Volunteers who took time out of their busy schedule to help us with this years band camp!  You are Truly Appreciated.</p>
          <p>At this years Berkmar Band Camp the Kids learned all Band Marching Fundamentals and Band Commands.  They also begin to learn the Music and Band Drill for this years show!</p>
          <ImageGallery items={bandCamp} />
        </div>
        <div style={{ marginTop: 50, width: '45%' }}>
          <h1>Concession Cleaning</h1>
          <p>Thank you to all the Volunteers who helped deep clean our concession stand!</p>
          <ImageGallery items={concession} />
        </div>
        <div style={{ marginTop: 50, width: '45%' }}>
          <h1>Uniform Cleaning</h1>
          <p>Thank you to the volunteers who came out for our Uniform Cleaning!</p>
          <ImageGallery items={uniform} />
        </div>
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default Gallery;
