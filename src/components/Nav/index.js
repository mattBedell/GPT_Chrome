import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Primary from './Primary';
import QuickView from './QuickView';

const Nav = props => {
  return (
    <>
      <Primary
        selectedView={props.selectedView}
        setSelected={props.setSelected}
        />
      <QuickView />
    </>
  )
}

Nav.propTypes = {
  selectedView: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}

export default Nav;
