import React from 'react';
import { Wrapper } from "../../../global/Wrapper";
import Footer from "../../Footer";

const ByLaws = () => {
  return (
    <>
      <Wrapper>
        <h1>The BYLAWS</h1>
        <p>These bylaws have been approved and adopted by the Executive Board of this corporation.</p>
        <embed src={ require('../../../images/byLawsPdf.pdf') } type="application/pdf" width="100%" height="700px" />
      </Wrapper>
      <Footer />
    </>
  )
};

export default ByLaws;
