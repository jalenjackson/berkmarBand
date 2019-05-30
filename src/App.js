import React from 'react';
import Navbar from './components/Navbar/index';
import Home from './components/Home';
import About from './components/About';
import { Provider } from 'react-redux';
import RootReducer from './store/rootReducer';
import { createStore } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import Media from './components/Media';
import Support from "./components/Support";
import ConcessionsPreOrder from "./components/ConcessionsPreOrder";
import Alumni from "./components/Alumni";
import ContactUs from "./components/ContactUs";
import Donation from "./components/Support/Donation";
import Gallery from "./components/Support/Gallery";
import Sponsor from "./components/Support/Sponsor";
import Volunteer from "./components/Support/Volunteer";
import Fundraisers from './components/Support/Fundraisers'
import BoardAndCommittee from "./components/About/BoardAndCommittee";
import BandAndBoosterAccomplishments from "./components/About/BandBoosterAccomplishments";
import MeetingMinutes from "./components/About/MeetingMinutes";
import MeetingMinutes2 from "./components/About/MeetingMinutes2";
import ByLaws from "./components/About/Bylaws";
import Footer from "./components/Footer";

const App = props => {

  const store = createStore(RootReducer);

  const { location } = props;

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(105px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-55px, 0, 0)' }
  });

  return (
    <Provider store={ store }>
      <Navbar />
      <Media />
      { transitions.map(({ item, props, key }) => (
        <animated.div key={ key } style={ props }>
          <Switch location={ item }>
            <Route exact path='/' component={ Home } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/support' component={ Support } />
            <Route exact path='/make-a-donation' component={ Donation } />
            <Route exact path='/fundraisers' component={ Fundraisers } />
            <Route exact path='/gallery-1' component={ Gallery } />
            <Route exact path='/become-a-sponsor' component={ Sponsor } />
            <Route exact path='/volunteer' component={ Volunteer } />

            <Route exact path='/the-board-and-committee-chairs' component={ BoardAndCommittee } />
            <Route exact path='/band-booster-accomplishments' component={ BandAndBoosterAccomplishments } />
            <Route exact path='/2016-2017-meeting-minutes-and-agendas' component={ MeetingMinutes } />
            <Route exact path='/2017-2018-meeting-minutes-and-agendas' component={ MeetingMinutes2 } />
            <Route exact path='/the-bylaws' component={ ByLaws } />

            <Route exact path='/concessions-pre-order' component={ ConcessionsPreOrder } />
            <Route exact path='/alumni' component={ Alumni } />
            <Route exact path='/contact' component={ ContactUs } />
          </Switch>
        </animated.div>
      )) }
    </Provider>
  );
};

export default withRouter(App);
