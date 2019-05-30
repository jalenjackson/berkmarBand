import React from 'react';
import { Table } from 'antd';
import { Wrapper, AbsoluteWrapper } from "../../../global/Wrapper";
import Cta from '../../Home/Cta';
import Footer from "../../Footer";

const dataSource = [
  {
    key: '1',
    meeting: 'Executive Commitee Agenda',
    date: '8/15/2017',
    href: 'https://docs.wixstatic.com/ugd/e48355_b1186fae1cb04ed9bf00f9bfe99383cc.pdf'
  },
  {
    key: '2',
    meeting: 'Executive Commitee Minutes',
    date: '8/15/2017',
  },
  {
    key: '3',
    meeting: 'General Meeting Agenda',
    date: '8/17/2017',
    href: 'https://docs.wixstatic.com/ugd/e48355_2e4de2288808466299c71c1281bf90f7.pdf'
  },
  {
    key: '4',
    meeting: 'General Meeting Minutes',
    date: '8/17/2017',
  },
];

const columns = [
  {
    title: 'Meeting',
    dataIndex: 'meeting',
    key: 'meeting',
    render: (text, record) => (
      <a target='_blank' href={ record.href }>
        { record.meeting }
      </a>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text, record) => (
      <a href={ record.href }>
        { record.date }
      </a>
    ),
  }
];

const MeetingMinutes2 = () => {
  return (
    <AbsoluteWrapper>
      <Wrapper>
        <div style={{ marginBottom: 50 }}>
          <Cta />
        </div>
        <h1>2017 -2018 Meeting Minutes and Agendas</h1>
        <Table dataSource={dataSource} columns={columns} />
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default MeetingMinutes2;
