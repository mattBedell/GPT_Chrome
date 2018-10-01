import React, { Component } from 'react';

import Tooltip from '../Tooltip';

export default function (IconContainer, tooltipText) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tooltip: false,
      };
      this.anchorId = `a${Math.random().toString(36).substring(2)}${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`;

      this.timeoutId = '';
    }

    setTooltipOn() {
      const { tooltip } = this.state;
      if (tooltip) return;
      this.timeoutId = setTimeout(() => {
        this.setState({
          tooltip: true,
        });
      }, 500);
    }

    setTooltipOff() {
      clearTimeout(this.timeoutId);
      this.setState({
        tooltip: false,
      });
    }

    render() {
      const { tooltip } = this.state;
      const { width, height } = this.props;
      return (
        <div
          id={this.anchorId}
          onMouseEnter={e => this.setTooltipOn(e)}
          onMouseLeave={e => this.setTooltipOff(e)}
          style={{ height, width }}
        >
          {tooltip ? <Tooltip tooltipText={tooltipText} anchorId={this.anchorId} /> : <></>}
          <IconContainer {...this.props} />
        </div>
      );
    }
  };
}
