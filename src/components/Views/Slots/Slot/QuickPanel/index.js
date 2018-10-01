import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import styled, { withTheme } from 'styled-components';

import { toggleQuickPanel as toggleQuickPanelAction } from '../../../../../actions/nav';
import { getSlotNav } from '../../../../../reducers/nav';
import {
  DivIcon,
  CogIcon,
  ComputerIcon,
  RefreshIcon,
  DocumentI,
} from '../../../../Icons';

import WithTooltip from '../../../../HOCs/WithTooltip';
import WithFade from '../../../../HOCs/WithFade';

// TODO: needs more flexible HOCS, possibly with decorators
const DivExistsIcon = WithFade(WithTooltip(DivIcon, 'Div exists in DOM'), { timeout: 200 });

const RenderIcon = WithFade(WithTooltip(ComputerIcon, 'Slot rendered'), { timeout: 200 });
const AltPanelIcon = WithFade(CogIcon, { timeout: 200 });
const RefreshSlotIcon = WithFade(WithTooltip(RefreshIcon, 'Refresh slot'), { timeout: 200 });
const ScrollToIcon = WithFade(WithTooltip(DocumentI, 'Scroll to slot'), { timeout: 200 });

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

const QuickPanel = ({
  isOpen,
  slotId,
  slotNav,
  toggleQuickPanel,
}) => {
  const iconProps = {
    isOpen,
    width: '17px',
    height: '17px',
  };
  return (
    <QuickPanelContainer>
      <TransitionGroup>
        {!slotNav.quickPanelOpen ? [
          <DivExistsIcon
            key={`qp-div-exists-${slotId}`}
            {...iconProps}
          />,
          <RenderIcon
            key={`qp-render-${slotId}`}
            {...iconProps}
          />,
        ] : [
          <ScrollToIcon
            key={`qp-scrollto-${slotId}`}
            {...iconProps}
          />,
          <RefreshSlotIcon
            key={`qp-refresh-${slotId}`}
            {...iconProps}
          />,
        ]}
        <AltPanelIcon
          key={`qp-alt-panel-${slotId}-closed`}
          isSelected={slotNav.quickPanelOpen}
          {...iconProps}
          handleClick={() => toggleQuickPanel(slotId)}
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
  toggleQuickPanel: slotId => dispatch(toggleQuickPanelAction(slotId)),
});

const QuickPanelThemed = withTheme(QuickPanel);

export default connect(mapStateToProps, mapDispatchToProps)(QuickPanelThemed);
