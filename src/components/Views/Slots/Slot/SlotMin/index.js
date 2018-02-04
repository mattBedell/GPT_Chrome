import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getSlotNav } from './../../../../../reducers/nav';
import { setSlot } from './../../../../../actions/nav';

import styled from 'styled-components';

import QuickPanel from './../QuickPanel';

const MinContainer = styled.div`
  width: 400px;
  height: 30px;
  background-color: ${props => props.isOpen ? props.theme.menuExpanded : props.theme.menuPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: sticky;
  top: ${props => props.index * 30}px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid ${props => props.isOpen ? props.theme.menuPrimary : props.theme.menuExpanded};
  transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  transition: border-left-color .2s, transform .2s;
  position: relative;
  margin-left: 10px;
`;

const SlotName = styled.div`
  color: ${props => props.isOpen ? props.theme.iconHighlighted : 'inherit'};
  font-size: 12px;
`;





const SlotMin = props => {
  return (
    <MinContainer
      onClick={() => props.setSlot(props.slotId,!props.slotNav.isOpen)} 
      isOpen={props.slotNav.isOpen}
      index={props.index}
    >
      <Arrow isOpen={props.slotNav.isOpen}/>
      <SlotName isOpen={props.slotNav.isOpen} >
        {props.slotName}
      </SlotName>
      <QuickPanel isOpen={props.slotNav.isOpen} slotId={props.slotId} />
    </MinContainer>
  )
}

SlotMin.propTypes = {
  slotName: PropTypes.string.isRequired,
  slotNav: PropTypes.object.isRequired,
  slotId: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    setSlot: (slotId, isOpen) => dispatch(setSlot(slotId, isOpen)),
  }
}

export default connect(null, mapDispatchToProps)(SlotMin);