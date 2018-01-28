import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setView } from './../actions/nav';

import { ThemeProvider } from 'styled-components';
import HTLDarkTheme from './../style/themes/HTLDark';
import variables from './../style/variables';


import Nav from './Nav';

class App extends Component {
  render() {
    return(
      <ThemeProvider theme={HTLDarkTheme} >
        <Nav />
      </ThemeProvider>
    )
  }
}


export default App;