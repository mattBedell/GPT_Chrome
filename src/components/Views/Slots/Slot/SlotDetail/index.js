import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import styled from 'styled-components';

const DetailContainer = styled.div`
  width: 100%;
  height: 330px;
  background-color: ${props => props.theme.menuExpanded}
`


const SlotDetail = props => {
  return (
    <DetailContainer />
  );
};

SlotDetail.propTypes = {
  
}


export default SlotDetail;