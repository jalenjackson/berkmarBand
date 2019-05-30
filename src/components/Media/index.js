import React from 'react';
import { AbsoluteWrapper, Wrapper } from "../../global/Wrapper";
import Cta from "../Home/Cta";
import ImageGallery from 'react-image-gallery';
import Footer from "../Footer";

const homecoming = [];
const rookieCamp = [];
const eating = [];
const leadership = [];
const practice = [];
const marching = [];

for (let i = 1; i < 15; i++) {
  homecoming.push({
    original: require(`../../images/homecoming/${ i }.webp`),
    thumbnail: require(`../../images/homecoming/${ i }.webp`),
  })
}

for (let i = 1; i < 14; i++) {
  rookieCamp.push({
    original: require(`../../images/rookieCamp/${ i }.webp`),
    thumbnail: require(`../../images/rookieCamp/${ i }.webp`),
  })
}

for (let i = 1; i < 13; i++) {
  eating.push({
    original: require(`../../images/eating/${ i }.webp`),
    thumbnail: require(`../../images/eating/${ i }.webp`),
  })
}

for (let i = 1; i < 9; i++) {
  leadership.push({
    original: require(`../../images/leadership/${ i }.webp`),
    thumbnail: require(`../../images/leadership/${ i }.webp`),
  })
}

for (let i = 1; i < 12; i++) {
  practice.push({
    original: require(`../../images/practice/${ i }.webp`),
    thumbnail: require(`../../images/practice/${ i }.webp`),
  })
}

for (let i = 1; i < 6; i++) {
  marching.push({
    original: require(`../../images/marching/${ i }.webp`),
    thumbnail: require(`../../images/marching/${ i }.webp`),
  })
}

const Media = props => {
  return (
    <AbsoluteWrapper>
      <Wrapper>
        <Cta />
        <div style={{ marginTop: 50, width: '45%' }}>
          <h1>Berkmar Homecoming</h1>
          <p>Berkmar Band enjoying their performance in the stands as well as on the field</p>
          <ImageGallery items={homecoming} />
        </div>
        <div style={{ marginTop: 50, width: '45%' }}>
          <h1>Berkmar Rookie Camp and Band Camp </h1>
          <p>At this years Berkmar Band Camp the Kids learned all Band Marching Fundamentals and Band Commands.  They also begin to learn the Music and Band Drill for this years show!</p>
          <ImageGallery items={rookieCamp} />
        </div>
        <div style={{ marginTop: 50, width: '45%' }}>
          <p>The students also had some fun eating delicious meals among friends and playing the Marching Band Olympic Games! </p>
          <ImageGallery items={eating} />
        </div>
        <div style={{ marginTop: 50, width: '45%' }}>
          <h1>Leadership Camp With Instructors Gywinn Lewis and Band Director Arthur Wright III</h1>
          <p>During the classroom session the students learned leadership skills, personal development, and how to conduct a marching band.</p>
          <ImageGallery items={leadership} />
        </div>
        <div style={{ marginTop: 50, width: '45%' }}>
          <p>During Field Practice students learned the proper stance for Set(attention), Parade Rest, Right Face, Left Face, About Face, and other Band Commands.  They were also taught how to properly call band commands, high step marching, and mark time. </p>
          <ImageGallery items={practice} />
        </div>
        <div style={{ marginTop: 50, width: '45%' }}>
          <h1>Marching Band and Pep Band</h1>
          <ImageGallery items={marching} />
        </div>
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default Media;
