import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(245, 245, 245);
  margin-top: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

const Director = () => {
  return (
    <Container>
      <img style={{ marginBottom: 30, borderRadius: 3 }} src={ require('../../../images/directorPic.webp') } />
      <p style={{ width: '70%', fontSize: 16, color: 'rgb(70, 70, 70)' }}>The Berkmar Patriot Band is led by Band Director Arthur Wright III.
        Wright previously served as Director of Bands/Assistant Professor of Music at Savannah State University.
        Mr. Wright is a member of the Georgia Music Educator's Association, National Education Association,
        College Band Directors National Association, Conductor’s Guild, HBCU National
        Band Director’s Consortium, Kappa Alpha Psi Fraternity, Inc., Kappa Kappa Psi National Honorary Band Fraternity,
        and Phi Mu Alpha Sinfonia Fraternity of America.
        Visit the Website!   www.berkmarbands.org
      </p>
    </Container>
  )
};

export default Director;
