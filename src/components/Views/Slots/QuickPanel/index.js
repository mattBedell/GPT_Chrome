import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import { connect } from 'react-redux';

import styled from 'styled-components';

import DivIcon from './../../../Icons/Browser';
import CogIcon from './../../../Icons/Gear';




const QuickPanelContainer = styled.div`
  width: 120px;
  height: 100%;
`;

const QuickPanel = props => {
  return (
    <QuickPanelContainer >
      <DivIcon isSelected={props.isSelected} />
    </QuickPanelContainer>
  )
};


QuickPanel.propTypes = {
  slotId: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
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