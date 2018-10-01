import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { lighten } from 'polished';
import { getTargeting } from '../../../../../reducers/slots';
import quickSort from '../../../../../utils/quickSort';

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
  border: 1px solid ${props => lighten(0.2, props.theme.content.content2)};
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
  const targArray = Object.keys(targetingObj).map(key => ({
    key,
    vals: targetingObj[key],
  }));

  quickSort(targArray, (arr, i) => arr[i].vals.length);

  if (sort === 'desc') {
    return targArray.reverse();
  }

  return targArray;
};


const Targeting = props => (
  <Paginator
    pageLinks
    render={pagination => (
      <KeyValView>
        {sortTargetingByLength(props.targeting, 'desc').map(targs => (
          <div style={{ width: '100%' }} key={`sentinal-keyval-${props.slotId}-${targs.key}`} ref={pagination.ref}>
            <KeyValContainer key={`keyval-${props.slotId}-${targs.key}`} currentPage={pagination.currentPage} offset={pagination.offset}>
              <KeyBox>{targs.key}</KeyBox>
              {targs.vals.map(val => (
                <ValBox key={`val-${val}`}>{val}</ValBox>
              ))}
            </KeyValContainer>
          </div>
        ))}
      </KeyValView>
    )}
  />
);

const mapStateToProps = (state, ownProps) => ({
  targeting: getTargeting(state, ownProps.slotId),
});

Targeting.propTypes = {
  slotId: PropTypes.string.isRequired,
  targeting: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Targeting);
