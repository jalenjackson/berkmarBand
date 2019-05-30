import React from 'react';
import {Row, Col} from 'antd';
import { Wrapper } from "../../../global/Wrapper";
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Sponsors = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: 50 }}>Our Sponsors</h1>
      <Wrapper>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <Image src={ require('../../../images/stateFarm.webp') } />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <Image src={ require('../../../images/dewey.webp') } />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <Image src={ require('../../../images/fulton.webp') } />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <Image src={ require('../../../images/musicGoRound.webp') } />
            </div>
          </Col>
        </Row>
      </Wrapper>
    </>
  )
};

export default Sponsors;
