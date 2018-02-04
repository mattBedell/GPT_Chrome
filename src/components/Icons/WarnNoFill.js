import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import IconContainer from './IconContainer';

const Warn = props => {
  return (
    <IconContainer isSelected={props.isSelected} width={props.width} height={props.height}>
      <svg viewBox="0 0 492.426 492.426" width={props.width} height={props.height} preserveAspectRatio="xMidYMin">
        <path fill={props.isSelected ? props.theme.menuPrimary : props.theme.menuExpanded}d="M485.013 383.313l-191.9-328.3c-9.8-16.8-27.4-26.8-46.9-26.8s-37 10-46.9 26.8l-191.9 328.3c-9.8 16.8-9.9 36.9-.2 53.7 9.8 17 27.4 27.2 47.1 27.2h383.8c19.7 0 37.3-10.2 47.1-27.2 9.7-16.8 9.6-36.9-.2-53.7zm-43.6 28.6c-.7 1.2-1.8 1.8-3.3 1.8h-383.8c-1.5 0-2.6-.6-3.3-1.8-.9-1.5-.3-2.6 0-3.1l191.9-328.3c.7-1.2 1.8-1.8 3.3-1.8s2.6.6 3.3 1.8l191.9 328.3c.3.5.9 1.6 0 3.1z"/>
        <path fill={props.isSelected ? props.theme.menuPrimary : props.theme.menuExpanded}d="M264.013 330.213h-35.6l-5-164.6h45.6zM228.513 350.113h35.4v35.4h-35.4z"/>
      </svg>
    </IconContainer>
  );
}

Warn.defaultProps = {
  width: '20px',
  height: '20px',
  isSelected: false,
  fill: '#FAFAFA',
}

export default withTheme(Warn);