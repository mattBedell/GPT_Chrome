import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import styled from 'styled-components';
import { setSlot as setSlotAction } from '../../../../../actions/nav';


import QuickPanel from '../QuickPanel';

const MinContainer = styled.div`
  width: 400px;
  height: 30px;
  background-color: ${props => (props.isOpen ? props.theme.menu.expanded : props.theme.menu.primary)};
  display: flex;
  justify-content: space-between;
  & > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  cursor: pointer;
  top: ${props => props.index * 30}px;
  z-index: 2;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid ${props => (props.isOpen ? props.theme.menu.primary : props.theme.menu.expanded)};
  transform: ${props => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: border-left-color .2s, transform .2s;
  margin-left: 10px;
  margin-right: 10px;
`;

const SlotName = styled.div`
  color: ${props => (props.isOpen ? props.theme.icon.highlighted : 'inherit')};
  font-size: 12px;
  margin-right: auto;
`;


const SlotMin = ({
  slotNav,
  index,
  setSlot,
  slotId,
  slotName,
}) => (
  <MinContainer
    isOpen={slotNav.isOpen}
    index={index}
  >
    <div role="presentation" onClick={() => setSlot(slotId, !slotNav.isOpen)}>
      <Arrow isOpen={slotNav.isOpen} />
      <SlotName isOpen={slotNav.isOpen}>
        {slotName}
      </SlotName>
    </div>
    <QuickPanel isOpen={slotNav.isOpen} slotId={slotId} />
  </MinContainer>
);

SlotMin.propTypes = {
  slotName: PropTypes.string.isRequired,
  slotNav: PropTypes.object.isRequired,
  slotId: PropTypes.string.isRequired,
  setSlot: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setSlot: (slotId, isOpen) => dispatch(setSlotAction(slotId, isOpen)),
});

export default connect(null, mapDispatchToProps)(SlotMin);
