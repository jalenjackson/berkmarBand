import React from 'react';
import { AbsoluteWrapper, Wrapper } from "../../../global/Wrapper";
import Table from "antd/lib/table";
import Cta from "../../Home/Cta";
import Footer from "../../Footer";

const dataSource = [
  {
    key: '1',
    quarter: 'Thank You Certificate',
    halfNote: 'Thank You Certificate​',
    wholeNote: 'Thank You Certificate',
    conductors: 'Thank You Certificate'
  },
  {
    key: '2',
    quarter: '2 Reserved Seats at the Winter and Spring Concert',
    halfNote: 'Name on Band Performance Programs​',
    wholeNote: 'Name on Band Performance Programs',
    conductors: 'Name on Band Performance Programs'
  },
  {
    key: '3',
    quarter: '',
    halfNote: '2 Reserved Seats at Winter and Spring Concert​',
    wholeNote: 'Name on Website',
    conductors: 'Name on Website'
  },
  {
    key: '4',
    quarter: '',
    halfNote: '​',
    wholeNote: '2 Reserved Seats at Winter and Spring Concert',
    conductors: '2 Reserved Seats at Winter and Spring Concerts'
  },
  {
    key: '4',
    quarter: '',
    halfNote: '​',
    wholeNote: '',
    conductors: '1 Free Ticket to End of The Year Banquet'
  },
];

const columns = [
  {
    title: 'Quarter Note $25',
    dataIndex: 'quarter',
    key: 'quarter',
  },
  {
    title: 'Half Note $50',
    dataIndex: 'halfNote',
    key: 'halfNote'
  },
  {
    title: 'Whole Note $100',
    dataIndex: 'wholeNote',
    key: 'wholeNote'
  },
  {
    title: 'Conductors Circle $150',
    dataIndex: 'conductors',
    key: 'conductors'
  },
];

const Donation = () => {
  return (
    <AbsoluteWrapper>
      <Wrapper>
        <Cta />
        <h1 style={{ marginTop: 50 }}>Direct Donation Campaign</h1>
        <p>Dear Parent, Family, Friend or Community Member:
          Berkmar Band Boosters Club is a non-profit 501(c )(3) organization that relies on the money earned by our fundraising efforts and donations to pay for the fees associated with being apart of the band.
          Unlike traditional fundraisers, the Booster Club nets 100% of the money raised by this campaign and the money is immediately available to be used for the needs of the children involved in the wonderful music program at Berkmar High School.
          This year, more than ever, your contribution will make a huge difference.  We hope that you will support us in our Direct Donation Campaign.
          If you choose to make a donation or know of someone who would like to support our cause, Click Here   for the donation form and Click Here for the Sponsor Letter (Espanol Haga clic aquí).   Please mail/send in your donation in an envelope marked Berkmar Band Boosters Club Donation, P.O. Box , Lilburn, GA 30047. Checks should be made out to: "The Berkmar Band Boosters". You may also click the donate button below to donate online.  Thank you for your support!</p>
        <Table style={{ marginTop: 50 }} dataSource={dataSource} columns={columns} />
      </Wrapper>
      <Footer/>
    </AbsoluteWrapper>
  )
};

export default Donation;
