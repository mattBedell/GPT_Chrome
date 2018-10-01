import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import { withTheme } from 'styled-components';

import { connect } from 'react-redux';

import styled from 'styled-components';

import {
  DivIcon,
  CogIcon,
  ComputerIcon,
  EventsIcon,
  EyeIcon,
  WarnNoFillIcon,
  WarnFillIcon,
  RefreshIcon,
  DocumentI,
} from '../../../../Icons';

import WithTooltip from '../../../../HOCs/WithTooltip';
import WithFade from '../../../../HOCs/WithFade';
import { toggleQuickPanel } from '../../../../../actions/nav';
import { getSlotNav } from '../../../../../reducers/nav';

// TODO: needs more flexible HOCS, possibly with decorators
const DivExistsIcon = WithFade(WithTooltip(DivIcon, 'Div exists in DOM'), { timeout: 200 });

const RenderIcon = WithFade(WithTooltip(ComputerIcon, 'Slot rendered'), { timeout: 200 });
const ErrorIcon = WithFade(WarnNoFillIcon, { timeout: 200 });
const AltPanelIcon = WithFade(CogIcon, { timeout: 200 });
const RefreshSlotIcon = WithFade(WithTooltip(RefreshIcon, 'Refresh slot'), { timeout: 200 });
const ScrollToIcon = WithFade(WithTooltip(DocumentI, 'Scroll to slot'), { timeout: 200 });
const EventsIconWithTooltip = WithTooltip(EventsIcon, 'Go to slot events');
const EyeIconWithTooltip = WithTooltip(EyeIcon, 'Impression Viewable');

const QuickPanelContainer = styled.div`
  width: 120px;
  height: 100%;
  
  & > :first-child {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > div {
      margin-right: 5px;
    }

    & > :last-child {
      margin: 0px 7px 0 3px;
    }
  }
`;

const QuickPanel = (props) => {
  const iconProps = {
    isOpen: props.isOpen,
    width: '17px',
    height: '17px',
  };
  return (
    <QuickPanelContainer >
      <TransitionGroup>
        {!props.slotNav.quickPanelOpen ? [
          <DivExistsIcon key={`qp-div-exists-${props.slotId}`}
          {...iconProps}
          />,
          <RenderIcon key={`qp-render-${props.slotId}`}
          {...iconProps}
          />,
        ] : [
          <ScrollToIcon key={`qp-scrollto-${props.slotId}`}
          {...iconProps}
          />,
          <RefreshSlotIcon key={`qp-refresh-${props.slotId}`}
          {...iconProps}
          />,
        ]}
          <AltPanelIcon key={`qp-alt-panel-${props.slotId}-closed`}
          isSelected={props.slotNav.quickPanelOpen}
          {...iconProps}
          handleClick={e => props.toggleQuickPanel(props.slotId)}
          />
      </TransitionGroup>

    </QuickPanelContainer>
  );
};


QuickPanel.propTypes = {
  slotId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  slotNav: getSlotNav(state, ownProps.slotId),
});

const mapDispatchToProps = dispatch => ({
  toggleQuickPanel: slotId => dispatch(toggleQuickPanel(slotId)),
});

const QuickPanelThemed = withTheme(QuickPanel);

export default connect(mapStateToProps, mapDispatchToProps)(QuickPanelThemed);
