import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Icon } from 'antd';
import { toggleModal } from "../../store/Media/actions";
import { connect } from "react-redux";
import styled from 'styled-components'

const { SubMenu }  = Menu;

const Logo = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
`;

const Navbar = props => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="logo">
          <NavLink exact to='/'>
            <h3 style={{ transform: 'translateY(6px)' }}>
              <Logo src={ require('../../images/logo.png') } />
              Berkmar Band Booster Club
            </h3>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="home">
          <NavLink to='/'>
            <Icon type="home" theme='twoTone' twoToneColor='#EE3F46' />
            Home
          </NavLink>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <NavLink to='/about'>
                <Icon type="rocket" theme='twoTone' twoToneColor='#EE3F46' />
                About
              </NavLink>
            </span>
          }>
          <Menu.ItemGroup>
            <Menu.Item key="about:1">
              <NavLink to='/the-board-and-committee-chairs'>
                The board and committee chairs
              </NavLink>
            </Menu.Item>
            <Menu.Item key="about:2">
              <NavLink to='/band-booster-accomplishments'>
                Band booster accomplishments
              </NavLink>
            </Menu.Item>
            <Menu.Item key="about:3">
              <NavLink to='/2016-2017-meeting-minutes-and-agendas'>
                2016-2017 meeting minutes and agendas
              </NavLink>
            </Menu.Item>
            <Menu.Item key="about:4">
              <NavLink to='/2017-2018-meeting-minutes-and-agendas'>
                2017-2018 meeting minutes and agendas
              </NavLink>
            </Menu.Item>
            <Menu.Item key="about:5">
              <NavLink to='/the-bylaws'>
                The bylaws
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item onClick={ props.toggleModal } key="media:1">
          <Icon type="file-image" theme='twoTone' twoToneColor='#EE3F46' />
          Media
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <NavLink to='/support'>
                <Icon type="heart" theme='twoTone' twoToneColor='#EE3F46' />
              Support Us
              </NavLink>
            </span>
          }>
          <Menu.ItemGroup>
            <Menu.Item key="support:1">
              <NavLink to='/volunteer'>
                Volunteer
              </NavLink>
            </Menu.Item>
            <Menu.Item key="support:2">
              <NavLink to='/gallery-1'>
                Gallery
              </NavLink>
            </Menu.Item>
            <Menu.Item key="support:3">
              <NavLink to='/make-a-donation'>
                Make a donation
              </NavLink>
            </Menu.Item>
            <Menu.Item key="support:4">
              <NavLink to='/become-a-sponsor'>
                Become a sponsor
              </NavLink>
            </Menu.Item>
            <Menu.Item key="support:5">
              <NavLink to='/fundraisers'>
                Fundraisers
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="preOrder:1">
          <NavLink to='/concessions-pre-order'>
            <Icon type="wallet" theme='twoTone' twoToneColor='#EE3F46' />
            Concessions Pre Order
          </NavLink>
        </Menu.Item>
        <Menu.Item key="alumni:1">
          <NavLink to='/alumni'>
            <Icon type="trophy" theme='twoTone' twoToneColor='#EE3F46' />
            Alumni
          </NavLink>
        </Menu.Item>
        <Menu.Item key="phone:1">
          <NavLink to='/contact'>
            <Icon type="phone" theme='twoTone' twoToneColor='#EE3F46' />
            Contact Us
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  }
};

export default connect(null, mapDispatchToProps)(Navbar);
