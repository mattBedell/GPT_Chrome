import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import SlotNav from '../SlotNav';
import Targeting from '../Targeting';

const DetailContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${props => props.theme.menu.expanded};
`;


const SlotDetail = ({ slotId }) => (
  <DetailContainer>
    <SlotNav />
    <Targeting slotId={slotId} />
  </DetailContainer>
);

SlotDetail.propTypes = {
  slotId: PropTypes.string.isRequired,
};


export default SlotDetail;
