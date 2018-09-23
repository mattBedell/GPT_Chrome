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
  background-color: ${props => props.isOpen ? props.theme.menu.expanded : props.theme.menu.primary};
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
  border-left: 8px solid ${props => props.isOpen ? props.theme.menu.primary : props.theme.menu.expanded};
  transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  transition: border-left-color .2s, transform .2s;
  margin-left: 10px;
  margin-right: 10px;
`;

const SlotName = styled.div`
  color: ${props => props.isOpen ? props.theme.icon.highlighted : 'inherit'};
  font-size: 12px;
  margin-right: auto;
`;





const SlotMin = props => {
  return (
    <MinContainer
      isOpen={props.slotNav.isOpen}
      index={props.index}
    >
    <div onClick={e => props.setSlot(props.slotId,!props.slotNav.isOpen)}>
      <Arrow isOpen={props.slotNav.isOpen}/>
      <SlotName isOpen={props.slotNav.isOpen} >
        {props.slotName}
      </SlotName>
    </div>
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