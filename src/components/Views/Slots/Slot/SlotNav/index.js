import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import styled from 'styled-components';

import Button from '../../../../Button';

const NavContainer = styled.div`
  background-color: ${props => props.theme.global.bodyBg};
  height: 25px;
  width: 100%;
  padding: 8px 0px 20px 30px;
  display: flex;
  justify-content: flex-start;
`;

const SlotNavBtn = Button.extend`
  background-color: inherit;
  color: ${props => (props.active ? props.theme.icon.primary : 'inherit')};
  margin: 0px 5px;
  &:hover {
    filter: none;
  }
`;

const SlotNav = props => (
  <NavContainer>
    <SlotNavBtn active>Targeting</SlotNavBtn>
    <SlotNavBtn active={false}>Render</SlotNavBtn>
    <SlotNavBtn active={false}>DFP</SlotNavBtn>
  </NavContainer>
);

SlotNav.propTypes = {

};


export default SlotNav;
