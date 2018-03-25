import React, { Component } from 'react';
import PropTypes from 'prop-types';
import quickSort from './../../../../../utils/quickSort';
import { connect } from 'react-redux';
import { getTargeting } from '../../../../../reducers/slots';

import styled from 'styled-components';

import Paginator from '../../../../Paginator';

const KeyValView = styled.div`
  height: 245px;
  display: flex;
  flex-flow: column wrap;
  overflow: hidden;
`;


const KeyValContainer = styled.div`
  display: flex;
  font-size: 12px;
  width: 100%;
  margin: 5px 10px 0px 5px;
  overflow-y: scroll;
  transform: ${props => `translate(${(props.pageNum - 1) * - 398}px)`};
  transition: transform .1s;
  z-index: 0;
`;

const TargetingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const KeyContainer = styled.div`
  display: flex;
`;

const TargBox = styled.div`
  padding: 2px;
  margin: 4px;
  margin-bottom: 0px;
  background-color: gray;
`;

const KeyBox = TargBox.extend`
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 3px;
  width: 100%;
  display: flex;
  align-items: center;
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
    <Paginator pageLimit={300} name={`targeting-${props.slotId}`} render={(state, pageThruRef) => {
      return(
      <KeyValView>
        {sortTargetingByLength(props.targeting, 'desc').map((targs, i) => (
          <div style={{width: '100%'}} key={`sentinal-${props.slotId}-key-${targs.key}-${i}`} ref={pageThruRef}>
            <KeyValContainer key={`${props.slotId}-key-${targs.key}-${i}`} pageNum={state.currentPage}>
              <KeyContainer>
                <KeyBox>{targs.key}</KeyBox>
              </KeyContainer>
              <TargetingContainer>
              {targs.vals.map((val, j) => (
                <TargBox key={`${props.slotId}-val-${val}-${i}-${j}`}>{val}</TargBox>
              ))}
              </TargetingContainer>
            </KeyValContainer>
          </div>
        ))}
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