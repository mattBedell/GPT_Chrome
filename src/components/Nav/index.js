import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setView } from './../../actions/nav';
import { getSelectedView } from './../../reducers/nav'


import Primary from './Primary';

const Nav = props => {
  return (
    <Primary
      selectedView={props.selectedView}
      setView={props.setView}
      />
  )
}


const mapStateToProps = state => {
  return {
    selectedView: getSelectedView(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setView: view => dispatch(setView(view)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)