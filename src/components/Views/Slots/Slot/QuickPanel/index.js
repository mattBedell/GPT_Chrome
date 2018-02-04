import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import { connect } from 'react-redux';

import styled from 'styled-components';

import {
  DivIcon,
  CogIcon,
  ComputerIcon,
  EventsIcon,
  EyeIcon,
  WarnNoFillIcon,
  WarnFillIcon } from './../../../../Icons';




const QuickPanelContainer = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const QuickPanel = props => {
  return (
    <QuickPanelContainer >
      <DivIcon isSelected={props.isOpen} width='17px' height='17px'/>
      <ComputerIcon isSelected={props.isOpen} width='17px' height='17px'/>
      <EventsIcon isSelected={props.isOpen} width='17px' height='17px'/>
      <EyeIcon isSelected={props.isOpen} width='17px' height='17px'/>
      <WarnNoFillIcon isSelected={props.isOpen} width='17px' height='17px'/>
    </QuickPanelContainer>
  )
};


QuickPanel.propTypes = {
  slotId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    // TODO
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // TODO
  }
}

const QuickPanelThemed = withTheme(QuickPanel);

export default connect(mapStateToProps, mapDispatchToProps)(QuickPanelThemed);