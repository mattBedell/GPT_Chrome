import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Button from '../Button';


const Nav = props => {
  return (
    <nav className='container-nav'>
      <Button
        onClick={() => props.setView('Slots')}
        active={props.selectedView === 'Slots'}
      >Slots</Button>
      <Button
        onClick={() => props.setView('Targeting')}
        active={props.selectedView === 'Targeting'}
      >Targeting</Button>

    </nav>
  )
};

export default Nav;
