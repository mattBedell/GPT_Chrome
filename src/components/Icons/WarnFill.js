import React from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import IconContainer from './IconContainer';

const Warn = (props) => {
  const { width, height } = props;
  return (
    <IconContainer {...props}>
      <svg viewBox="0 0 488.451 488.451" width={width} height={height} preserveAspectRatio="xMidYMin">
        <path d="M484.125 412.013l-212.2-367.6c-12.3-21.3-43.1-21.3-55.4 0l-212.2 367.6c-12.3 21.3 3.1 48 27.7 48h424.4c24.6 0 40-26.7 27.7-48zm-239.6-254.4c13.6 0 24.6 11.3 24.2 24.9l-4 139.6c-.3 11-9.3 19.7-20.3 19.7s-20-8.8-20.3-19.7l-3.9-139.6c-.3-13.6 10.6-24.9 24.3-24.9zm-.3 252.5c-13.9 0-25.2-11.3-25.2-25.2 0-13.9 11.3-25.2 25.2-25.2s25.2 11.3 25.2 25.2-11.3 25.2-25.2 25.2z" />
      </svg>
    </IconContainer>
  );
};

Warn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isOpen: PropTypes.bool,
  fill: PropTypes.string,
};

Warn.defaultProps = {
  width: '20px',
  height: '20px',
  isOpen: false,
  fill: '#FAFAFA',
};

export default withTheme(Warn);
