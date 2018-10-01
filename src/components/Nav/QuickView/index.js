import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Backdrop = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${props => props.theme.menu.expanded};
  position: relative;
  z-index: 2;
`;

const QuickView = props => (
    <Backdrop>

    </Backdrop>
);

export default QuickView;
