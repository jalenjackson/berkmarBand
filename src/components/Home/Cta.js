import React from 'react';
import {Card} from 'antd';
import { CardOverwrite } from "../../global/Wrapper";

const Cta = () => {
  return (
    <>
      <Card style={{ ...CardOverwrite, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ marginTop: 15 }}>Please visit our <a target='_blank' href='https://www.charmsoffice.com/charms2/login.asp#public'>Charms website</a>  for event information, files, statements, and other important band information for students and parents.</p>
      </Card>
    </>
  )
};

export default Cta;
