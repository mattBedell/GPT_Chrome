import React, { Component } from 'react';
import PropTypes from 'prop-types';
import quickSort from './../../../../../utils/quickSort';
import { connect } from 'react-redux';
import { getTargeting } from '../../../../../reducers/slots';

import styled from 'styled-components';
import { lighten, darken } from 'polished';

import Paginator from '../../../../Paginator';

const KeyValView = styled.div`
  height: 245px;
  display: flex;
  flex-flow: column wrap;
`;


const KeyValContainer = styled.div`
  display: flex;
  font-size: 12px;
  width: 100%;
  flex-wrap: wrap;
  transform: ${props => `translate(${(props.currentPage - 1) * -props.offset}px)`};
  transition: transform .2s;
`;

const ValBox = styled.div`
  background-color: ${props => props.theme.content.content2};
  border: 1px solid ${props => lighten(.2, props.theme.content.content2)};
  padding: 5px;
  margin: 2px;
`;

const KeyBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3px;
  background-color: ${props => props.theme.content.content4};
  margin-bottom: 2px;
`;

const sortTargetingByLength = (targetingObj, sort = 'asc') => {
  const targArray = Object.keys(targetingObj).map(key => {
    return {
      key,
      vals: targetingObj[key],
    }
  });

  quickSort(targArray, (arr, i) => arr[i].vals.length);

  if (sort === 'desc') {
    return targArray.reverse();
  }

  return targArray;
};


const Targeting = props => {
  return (
    <Paginator pageLinks={true} render={(pagination) => {
      return(
        <KeyValView>
          {sortTargetingByLength(props.targeting, 'desc').map((targs, i) => {
            return (
              <div style={{width: '100%'}} key={`sentinal-keyval-${props.slotId}-${i}`} ref={pagination.ref}>
                <KeyValContainer key={`keyval-${props.slotId}-${i}`} currentPage={pagination.currentPage} offset={pagination.offset}>
                  <KeyBox>{targs.key}</KeyBox>
                  {targs.vals.map((val, j) => {
                    return (
                      <ValBox key={`val-${val}-${j}`}>{val}</ValBox>
                    )
                  })}
                </KeyValContainer>
              </div>
            )
          })}
        </KeyValView>
      )
    }} />
  );
};

Targeting.propTypes = {
  slotId: PropTypes.string.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    targeting: getTargeting(state, ownProps.slotId),
  }
}


export default connect(mapStateToProps)(Targeting);