import React, { Component } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  background: none;
  background-color: ${props => props.active ? (props.activeColor || 'gray') : (props.inactiveColor || '#FAFAFA')};
  user-select: none;
  white-space: pre;
  padding: none;
  margin: none;
  &:focus {
    outline: none;
  }
  border: 1px solid ${props => props.activeColor || 'gray'};
`;

export default Button;