import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setView } from './../actions/nav';

import { ThemeProvider } from 'styled-components';
import HTLDarkTheme from './../assets/themes/HTLDark';


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