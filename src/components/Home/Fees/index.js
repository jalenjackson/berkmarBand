import React from 'react';
import styled from 'styled-components';
import {Row, Col, Card} from 'antd';
import { CardOverwrite } from "../../../global/Wrapper";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const Container = styled.div`
  padding-left: 70px;
  padding-right: 70px;
`;

const Header = styled.h1`
  text-align: center;
  margin-top: 60px;
`;

const Fees = () => {
  return (
    <>
      <Header>Berkmar Band Fees 2019-2020 School Year</Header>
      <Wrapper>
        <Container>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Card style={ CardOverwrite } title="Default size card" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={ CardOverwrite } title="Default size card" extra={<a href="#">More</a> }>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={ CardOverwrite } title="Default size card" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={ CardOverwrite } title="Default size card" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    </>
  )
};

export default Fees;
