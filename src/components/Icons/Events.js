import React from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import IconContainer from './IconContainer';

const Events = (props) => {
  const { width, height } = props;
  return (
    <IconContainer {...props}>
      <svg viewBox="0 0 48 48" width={width} height={height} preserveAspectRatio="xMidYMin">
        <path d="M44 5.476H4c-2.2 0-4 1.8-4 4v12.481h12.301l2.688-6.877c.307-.785 1.094-1.299 1.914-1.271a2.002 2.002 0 0 1 1.847 1.368l3.803 11.437 4.104-9.763a2 2 0 0 1 1.77-1.223c.802-.034 1.503.396 1.855 1.089l2.676 5.241h2.709c1.104 0 2 .896 2 2s-.896 2-2 2h-3.935c-.752 0-1.438-.423-1.78-1.091l-1.275-2.5-4.499 10.7c-.312.744-1.041 1.227-1.843 1.227-.026 0-.052 0-.078-.002a1.9973 1.9973 0 0 1-1.821-1.367L16.7 21.69l-1.17 2.995c-.3.768-1.039 1.271-1.863 1.271H0v12.567c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V9.474c0-2.198-1.8-3.998-4-3.998z" />
      </svg>
    </IconContainer>
  );
};

Events.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isOpen: PropTypes.bool,
  fill: PropTypes.string,
};

Events.defaultProps = {
  width: '20px',
  height: '20px',
  isOpen: false,
  fill: '#FAFAFA',
};

export default withTheme(Events);
