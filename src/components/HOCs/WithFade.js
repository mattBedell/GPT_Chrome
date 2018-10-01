import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

import styled from 'styled-components';


const FadeContainer = styled.div`
  opacity: ${props => props.opacity / 100};
  transition: opacity ${props => props.duration / 1000}s;
  width: ${props => (props.width ? props.width : 'inherit')};
  height: ${props => (props.height ? props.height : 'inherit')};
`;

export default function (FadedComponent, options = {}) {
  const defaultOptions = {
    timeout: 1000,
    entering: 0,
    entered: 100,
    exiting: 0,
    exited: 0,
  };

  const transOptions = Object.assign({}, defaultOptions, options);
  return class extends Component {
    static handleEnter(node) {
      /*
       * on mount <Transition /> passes transition state
       *  exited, entering
       * too quickly for a reflow
       * this triggers a reflow between the two states so an animation happens
       *
      */

      // eslint-disable-next-line no-unused-expressions
      node.scrollTop;
    }

    render() {
      const childProps = Object.assign({}, this.props);
      delete childProps.in;
      return (
        <Transition
          timeout={transOptions.timeout}
          onEnter={node => this.constructor.handleEnter(node)}
          {...this.props}
        >
          {transitionState => (
            <FadeContainer opacity={transOptions[transitionState]} {...childProps} duration={transOptions.timeout}>
              <FadedComponent {...childProps} />
            </FadeContainer>
          )}
        </Transition>
      );
    }
  };
}
