import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getSelectedSlot } from './../../../../reducers/nav';
import { setSlot } from './../../../../actions/nav';

import styled from 'styled-components';

import QuickPanel from './../QuickPanel';

const MinContainer = styled.div`
  width: 400px;
  height: 30px;
  background-color: ${props => props.isSelected ? props.theme.menuExpanded : props.theme.menuPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid ${props => props.isSelected ? props.theme.menuPrimary : props.theme.menuExpanded};
  transform: ${props => props.isSelected ? 'rotate(90deg)' : 'rotate(0deg)'};
  transition: border-left-color .2s, transform .2s;
  position: relative;
  margin-left: 10px;
`;

const SlotName = styled.div`
  color: ${props => props.isSelected ? props.theme.iconHighlighted : 'inherit'};
  font-size: .8em;
`;






const minMaxSlot = props => {
  if (props.isSelected) {
    props.selectSlot(false);
  } else {
    props.selectSlot(props.slot.slotId);
  }
}



const SlotMin = props => {
  return (
    <MinContainer onClick={() => minMaxSlot(props)} isSelected={props.isSelected}>
      <Arrow isSelected={props.isSelected}/>
      <SlotName isSelected={props.isSelected} >
        {props.slot.path}
      </SlotName>
      <QuickPanel slotId={props.slot.slotId}/>
    </MinContainer>
  )
}

SlotMin.propTypes = {
  slot: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected: getSelectedSlot(state) === ownProps.slot.slotId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectSlot: slotId => dispatch(setSlot(slotId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlotMin);