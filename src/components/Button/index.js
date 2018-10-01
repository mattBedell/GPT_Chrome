import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = styled.button`
  border: none;
  background: none;
  background-color: ${props => (props.active ? props.theme.menu.expanded : props.theme.menuPrimary)};
  color: ${props => (props.active ? props.theme.icon.highlighted : 'inherit')};
  user-select: none;
  white-space: pre;
  font-weight: bolder;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: ${props => (props.active ? 'none' : 'brightness(130%)')};
  }
`;

Button.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Button;
