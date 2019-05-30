import React from 'react';
import { Table } from 'antd';
import { Wrapper, AbsoluteWrapper } from "../../../global/Wrapper";
import Cta from '../../Home/Cta';
import Footer from "../../Footer";

const dataSource = [
  {
    key: '1',
    meeting: 'Executive Commitee Agenda',
    date: '5/17/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_5349ebbf8920410a921417a90753eed7.pdf'
  },
  {
    key: '2',
    meeting: 'Executive Commitee Minutes',
    date: '5/17/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_a618e3651b93456fa9ae72b55068bf0d.pdf'
  },
  {
    key: '3',
    meeting: 'General Meeting Agenda',
    date: '5/23/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_6baed93d7eef4f62ae1d23c504448316.pdf'
  },
  {
    key: '4',
    meeting: 'General Meeting Minutes',
    date: '5/23/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_c7422f6cc28d4737a7417d5b72c0bd96.pdf'
  },
  {
    key: '5',
    meeting: 'Executive Committee Agenda',
    date: '6/14/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_9ec07ce0db7c47a4a4b13ad046f8ac5b.pdf'
  },
  {
    key: '6',
    meeting: 'Exective Committee Minutes',
    date: '6/14/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_e500533ae711475496ffe0602b22502e.pdf'
  },
  {
    key: '7',
    meeting: 'Executive Committee Agenda',
    date: '6/23/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_6fbbc784c441448093473d8e78ff99f5.pdf'
  },
  {
    key: '8',
    meeting: 'Executive Committee Minutes',
    date: '6/23/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_caf022bb000744afa4c7f3178700cd44.pdf'
  },
  {
    key: '9',
    meeting: 'Executive Committee Agenda',
    date: '7/12/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_1de01785007740a493c5a75a266baf5b.pdf'
  },
  {
    key: '10',
    meeting: 'Executive Committee Minutes',
    date: '7/12/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_8cd3ee08d429402bb03ba7e27b9203bc.pdf'
  },
  {
    key: '11',
    meeting: 'General Meeting Agenda',
    date: '7/14/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_4a4e49bd916b4e4eac448a7bde57452c.pdf'
  },
  {
    key: '12',
    meeting: 'General Meeting Minutes',
    date: '7/14/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_6b6e66a5f1814325bb99df1ec9721599.pdf'
  },
  {
    key: '13',
    meeting: 'Executive Committee Agenda',
    date: '8/16/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_b74e9d21cec441b58c29aa55aae35023.pdf'
  },
  {
    key: '14',
    meeting: 'Executive Committee Minutes',
    date: '8/16/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_1d06032252fc4e1c9a7c66d9f0f49c7e.pdf'
  },
  {
    key: '15',
    meeting: 'General Meeting Agenda',
    date: '8/18/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_932c0c6bdd174a8893f5bb020ba36f1f.pdf'
  },
  {
    key: '16',
    meeting: 'General Meeting Minutes',
    date: '8/18/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_2fa2eb8737744c84b2061dbd841a4ee2.pdf'
  },
  {
    key: '17',
    meeting: 'Executive Committee Agenda',
    date: '9/13/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_822cf7249e044ba6a777b1e76254bb60.pdf'
  },
  {
    key: '18',
    meeting: 'Executive Committee Minutes',
    date: '9/13/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_4f443759a2104cf6b0534434667f7856.pdf'
  },
  {
    key: '19',
    meeting: 'General Meeting Agenda',
    date: '9/15/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_c613e95a629d4149a03e80952a92f610.pdf'
  },
  {
    key: '20',
    meeting: 'General Meeting Minutes',
    date: '9/15/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_c613e95a629d4149a03e80952a92f610.pdf'
  },
  {
    key: '21',
    meeting: 'Executive Committee Agenda',
    date: '10/25/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_7dfba4291c854db18a995c302e174442.pdf'
  },
  {
    key: '22',
    meeting: 'Executive Committee Minutes',
    date: '10/25/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_49b004fb82db463ab67d2a5430b63a01.pdf'
  },
  {
    key: '23',
    meeting: 'General Meeting Agenda',
    date: '10/27/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_243f4e0bbfd94c4d865bb7b77a58e46b.pdf'
  },
  {
    key: '24',
    meeting: 'General Meeting Minutes',
    date: '10/27/2016',
    href: 'https://docs.wixstatic.com/ugd/e48355_c0da6240516a4a87b490a33499d4a068.pdf'
  },
  {
    key: '25',
    meeting: 'Executive Committee Meeting Canceled',
    date: '11/15/2016',
  },
  {
    key: '26',
    meeting: 'General Meeting Canceled',
    date: '11/17/2016',
  },
  {
    key: '27',
    meeting: 'General Meeting Agenda',
    date: '12/13/2016',
  },
  {
    key: '28',
    meeting: 'General Meeting Minutes',
    date: '12/13/2016',
  },
  {
    key: '29',
    meeting: 'Executive Committee Agenda',
    date: '1/17/2017',
  },
  {
    key: '30',
    meeting: 'Executive Committee Minutes',
    date: '1/17/2017',
  },
  {
    key: '31',
    meeting: 'General Meeting Agenda',
    date: '1/19/2017',
  },
  {
    key: '32',
    meeting: 'General Meeting Minutes',
    date: '1/19/2017',
  },
  {
    key: '33',
    meeting: 'Executive Committee Meeting Canceled',
    date: '2/14/2017',
  },
  {
    key: '34',
    meeting: 'General Meeting Canceled',
    date: '2/16/2017',
  },
  {
    key: '35',
    meeting: 'Executive Committee Agenda',
    date: '3/14/2017',
    href: 'https://docs.wixstatic.com/ugd/e48355_b3fda7f9274647c5b0692a25900abe6e.pdf'
  },
  {
    key: '36',
    meeting: 'Executive Committee Minutes',
    date: '3/14/2017',
    href: 'https://docs.wixstatic.com/ugd/e48355_98a1b78ec4014de5ad83133916356107.pdf'
  },
  {
    key: '37',
    meeting: 'General Meeting Agenda',
    date: '3/16/2017',
  },
  {
    key: '38',
    meeting: 'General Meeting Minutes',
    date: '3/16/2017',
  },
  {
    key: '38',
    meeting: 'Executive Committee Agenda',
    date: '4/18/2017',
    href: 'https://docs.wixstatic.com/ugd/e48355_2babde38f66b49aa895dba155c586f36.pdf'
  },
  {
    key: '39',
    meeting: 'Executive Committee Minutes',
    date: '4/18/2017',
    href: 'https://docs.wixstatic.com/ugd/e48355_9e1611886c1c409cba7e460aef39deb6.pdf'
  },
  {
    key: '40',
    meeting: 'General Meeting Agenda',
    date: '4/20/2017',
    href: 'https://docs.wixstatic.com/ugd/e48355_9329ce16fb274847a53fcd37fbdf1b14.pdf'
  },
  {
    key: '41',
    meeting: 'General Meeting Minutes',
    date: '4/20/2017',
  },
  {
    key: '42',
    meeting: 'General Meeting Agenda',
    date: '5/9/2017',
  },
  {
    key: '43',
    meeting: 'General Meeting Minutes',
    date: '5/9/2017',
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

const MeetingMinutes = () => {
  return (
    <AbsoluteWrapper>
      <Wrapper>
        <div style={{ marginBottom: 50 }}>
          <Cta />
        </div>
        <h1>2016 -2017 Meeting Minutes and Agendas</h1>
        <Table dataSource={dataSource} columns={columns} />
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default MeetingMinutes;
