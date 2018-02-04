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
  background-color: ${props => props.theme.brandPrimary}
`;

const ViewContainer = styled.div`
  height: 430px;
  overflow-y: scroll;
`

class App extends Component {
  render() {
    return(
      <ThemeProvider theme={HTLDarkTheme}>
      <>
        <Nav
          selectedView={this.props.selectedView}
          setSelected={this.props.setView}
        />
        <Spacer />
        <ViewContainer>
          <Slots />
        </ViewContainer>
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

