import React from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import IconContainer from './IconContainer';

const DocumentI = (props) => {
  const { width, height } = props;
  return (
    <IconContainer {...props}>
      <svg viewBox="0 0 48.001 48.001" width={width} height={height} preserveAspectRatio="xMidYMin">
        <path d="M13.685 12.034h20.621v3H13.685zM13.685 19.224h20.621v3H13.685z" />
        <path d="M43.015 0h-38c-.553 0-1 .447-1 1v33.323c-.011.096-.029.189-.029.29 0 4.912 3.681 8.972 8.428 9.589l-.029.021L42.016 48c1.104 0 2-.895 2-2V1c-.001-.553-.45-1-1.001-1zm-4 42.207l-19.84-11.635c-.466-.297-.844-.09-.844.464v3.422-.015c-.004.058 0 .11 0 .17 0 2.58-2.087 4.679-4.667 4.679-2.58 0-4.649-1.929-4.649-4.508 0-.091.009-.22 0-.309V5h30v37.207z" />
      </svg>
    </IconContainer>
  );
};

DocumentI.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isOpen: PropTypes.bool,
  fill: PropTypes.string,
};

DocumentI.defaultProps = {
  width: '20px',
  height: '20px',
  isOpen: false,
  fill: '#FAFAFA',
};

export default withTheme(DocumentI);
