import React from 'react';
import {Card} from 'antd';
import { CardOverwrite, Wrapper } from "../../../global/Wrapper";

const Meetings = () => {
  return (
    <Wrapper>
      <Card style={ CardOverwrite } title="Meetings">
        <p>Mandatory Parent Meetings at Berkmar High School at 7:00 pm</p>
        <p>2019-2020 Dates:</p>
      </Card>
    </Wrapper>
  )
};

export default Meetings;
