import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import styled from 'styled-components';


const TooltipContainer = styled.div`
  position: absolute;
  z-index: 10;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  opacity: ${props => props.opacity};
  transition: opacity .2s;
  user-select: none;
`;

const TextContainer = styled.div`
  font-size: 12px;
  background-color: ${props => props.theme.brand.info};
  padding: 2px;
`;

const Arrow = styled.div`
  width: 0px;
  height: 0px;
  border-top: 4px solid ${props => props.theme.brand.info};
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;

`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    const { anchorId } = this.props;
    this.tooltipRoot = document.querySelector('#tooltip-root');
    this.anchorRect = document.querySelector(`#${anchorId}`).getBoundingClientRect();
    this.state = {
      opacity: 0,
      left: 0,
      top: this.anchorRect.y - this.anchorRect.height - 8,
    };
  }

  componentDidMount() {
    this.dimensions = this.tooltipRoot.children[0].getBoundingClientRect();
    this.setState({
      opacity: 100,
      left: (this.anchorRect.x - (this.dimensions.width / 2)) + this.anchorRect.width / 2,
    });
  }

  render() {
    const {
      top,
      left,
      opacity,
    } = this.state;
    const { tooltipText } = this.props;
    return ReactDOM.createPortal(
      <TooltipContainer
        left={left}
        top={top}
        opacity={opacity}
      >
        <TextContainer>
          {tooltipText}
        </TextContainer>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      </TooltipContainer>,
      this.tooltipRoot,
    );
  }
}

Tooltip.propTypes = {
  anchorId: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

export default Tooltip;
