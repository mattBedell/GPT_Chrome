import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import IconContainer from './IconContainer';

const Browser = props => {
  return (
    <IconContainer isSelected={props.isSelected}>
      <svg viewBox="0 0 489.2 489.2" width={props.width} height={props.height} preserveAspectRatio="xMidYMin">
        <path fill={props.isSelected ? props.theme.menuPrimary : props.theme.menuExpanded} d="M489.2 409.55V80.65c0-34.9-28.3-63.1-63.1-63.1h-363C28.2 17.55 0 45.85 0 80.65v328.9c0 34.3 27.8 62.1 62.1 62.1h365c34.3 0 62.1-27.8 62.1-62.1zm-87.1-356.5c14.3 0 25.8 11.6 25.8 25.8 0 14.3-11.6 25.8-25.8 25.8-14.3 0-25.8-11.6-25.8-25.8 0-14.2 11.5-25.8 25.8-25.8zm-75.4 0c12.5 0 22.9 8.8 25.3 20.6.3 1.7.5 3.4.5 5.2 0 1.8-.2 3.5-.5 5.2-2.4 11.8-12.8 20.6-25.3 20.6-14.3 0-25.8-11.6-25.8-25.8 0-14.2 11.5-25.8 25.8-25.8zm-75.4 0c14.3 0 25.8 11.6 25.8 25.8 0 14.3-11.6 25.8-25.8 25.8-14.3 0-25.8-11.6-25.8-25.8-.1-14.2 11.5-25.8 25.8-25.8zm168.3 377.7h-350c-15.9 0-28.7-12.9-28.7-28.7v-265.1h407.4v265.1c0 15.8-12.8 28.7-28.7 28.7z"/>
      </svg>
    </IconContainer>
  );
}

Browser.defaultProps = {
  width: '20px',
  height: '20px',
  isSelected: false,
  fill: '#FAFAFA',
}

export default withTheme(Browser);



