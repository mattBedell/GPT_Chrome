import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setView } from './../actions/nav';
import { getSelectedView } from './../reducers/nav';

import styled, { ThemeProvider } from 'styled-components';
import HTLDarkTheme from './../assets/themes/HTLDark';

import Nav from './Nav';
import Slots from './Views/Slots';



const Spacer = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.brandPrimary}
`;

class App extends Component {
  render() {
    return(
      <ThemeProvider theme={HTLDarkTheme}>
      <>
        <Nav
          selectedValue={this.props.selectedView}
          setSelected={this.props.setView}
        />
        <Spacer />
        <Slots />
      </>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedView: getSelectedView(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setView: view => dispatch(setView(view)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

