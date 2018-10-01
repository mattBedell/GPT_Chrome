import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';

const PrimaryButton = Button.extend`
  height: 40px;
  width: 100px;
  font-size: 17px;
  box-shadow: ${props => (props.active ? '0px 3px 18px -9px rgb(182, 188, 196)' : 'none')};
  position: relative;
  z-index: ${props => (props.active ? 1 : 0)};
`;

const PrimaryViewNav = (props) => {
  const { selectedView } = props;
  const shouldDispatchSetView = (toView) => {
    if (selectedView === toView) return;
    props.setSelected(toView);
  };
  return (
    <nav>
      <PrimaryButton
        onClick={() => shouldDispatchSetView('Slots')}
        active={selectedView === 'Slots'}
      >
  Slots
      </PrimaryButton>
      <PrimaryButton
        onClick={() => shouldDispatchSetView('Page')}
        active={selectedView === 'Page'}
      >
  Page
      </PrimaryButton>
      <PrimaryButton
        onClick={() => shouldDispatchSetView('Events')}
        active={selectedView === 'Events'}
      >
  Events
      </PrimaryButton>
      <PrimaryButton
        onClick={() => shouldDispatchSetView('Debug')}
        active={selectedView === 'Debug'}
      >
  Debug
      </PrimaryButton>
    </nav>
  );
};

PrimaryViewNav.propTypes = {
  selectedView: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};


/** Top level navigation */
export default PrimaryViewNav;
