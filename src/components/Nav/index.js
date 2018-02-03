import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Primary from './Primary';
import QuickView from './QuickView';

const Nav = props => {
  return (
    <>
      <Primary
        selectedValue={props.selectedValue}
        setSelected={props.setSelected}
        />
      <QuickView />
    </>
  )
}

Nav.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}

export default Nav;
