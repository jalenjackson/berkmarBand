import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  background: black;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <Wrapper>
      <p style={{ color: 'white' }}>© 2019 by Berkmar Band Boosters Club.</p>
      <a>Follow us on Facebook</a>
      <a>Become a fan</a>
    </Wrapper>
  )
};

export default Footer;
