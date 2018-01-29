import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import styled from 'styled-components';


const QuickPanelContainer = styled.div`
  width: 120px;
  height: 100%;
`;

const QuickPanel = props => {
  return (
    <QuickPanelContainer >

    </QuickPanelContainer>
  )
};


QuickPanel.propTypes = {
  slotId: PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(QuickPanel);