import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = styled.button`
  border: none;
  background: none;
  background-color: ${props => props.active ? props.theme.brandPrimary : props.theme.bodyBg};
  user-select: none;
  white-space: pre;
  font-weight: ${props => props.active ? 'bolder' : 'inherit'};
  &:focus {
    outline: none;
  }
  &:hover {
    filter: ${props => props.active ? 'none' : 'brightness(97%)' };
  }
`;

Button.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default Button;