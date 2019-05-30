import React from 'react';
import { AbsoluteWrapper, Wrapper } from "../../../global/Wrapper";
import {Table} from "antd";
import Footer from "../../Footer";

const dataSource = [
  {
    key: '1',
    area: 'Concessions',
    description: 'Concession event staffing provides a large portion of the funding used to support the Berkmar High School Band. Volunteering in concessions helps raise money money for your student by earning credits toward a student’s account. Volunteer workers for concession will arrive prior to event to prepare stand. Each event will have a stand manager(s) to direct volunteers on what needs to be done. Tasks generally include counting beginning inventory items; wrapping hot dogs, hamburgers, and prepping nachos; counting ending inventory items; general cleaning. Depending on the event, workers are assigned to cashier, runner, and prepping. ​',
  },
  {
    key: '2',
    area: 'Gate Worker',
    description: 'We need volunteers to collect tickets at the gate for all home games. Volunteering in this area will also help you earn credit toward your students account.​',
  },
  {
    key: '3',
    area: 'Equipment Crew',
    description: 'We need volunteers to load and unload equipment on the trailer before and/or after games. Assists students with quickly getting equipment on and off the field during field shows for all games and competitions. ​ We also need volunteers to tow equipment trailer to and from football games, competitions and other events. Requires own vehicle.​',
  },
  {
    key: '4',
    area: 'Uniforms',
    description: 'We need volunteers to size and distribute uniforms, arrange for any necessary repairs and cleaning, and check uniforms back in at the end of each game, competition, and concerts.​',
  },
  {
    key: '5',
    area: 'Band Camp',
    description: 'Band Camp is one of our major events of the year. It requires much organization and help. We need as many volunteers as possible to help prepare food, serve lunch, pass out snacks and drinks, on the practice field to assist with first aid (ice packs, extra water, band-aids), and help out in other areas as needed.​',
  },
  {
    key: '6',
    area: 'Hospitality Chaperone',
    description: 'Serves refreshments/pre orders at football games. Arranges/serves meals and snacks for marching competition events. Assists with refreshments and decorations for Band events throughout year as needed. Provide supervision for the band at all band functions. Student check list, roll call, and possibly carry instrument stands if needed. Must ride bus for away games.​',
  },
  {
    key: '7',
    area: 'Fundraising',
    description: 'Assist Boosters with coordinating and publicizing fundraising activities throughout the year; Includes “front line” and behind the scenes activity such as soliciting and picking up donations.​',
  },
];

const columns = [
  {
    title: 'Area',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Sign Up',
    dataIndex: 'signUp',
    key: 'signUp',
    render: () => (
      <a href='mailto:berkmarbandboostersclub@gmail.com'>
        Click Here
      </a>
    ),
  }
];

const Volunteer = () => {
  return (
    <AbsoluteWrapper>
      <Wrapper>
        <h1>We Need You! Become a Volunteer</h1>
        <p>We could not provide the level of support necessary without parental involvement.  Please consider the following volunteer opportunities. Parents please Click Here for our Parent Commitment Form. You may also email us at berkmarbandboostersclub@gmail.com</p>
        <Table dataSource={dataSource} columns={columns} />
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default Volunteer;
