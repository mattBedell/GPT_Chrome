import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setView } from './../actions/nav';
import { getSelectedView } from './../reducers/nav';

import styled, { ThemeProvider } from 'styled-components';
import HTLDarkTheme from './../assets/themes/HTLDark';
import ColorMap from '../components/Theme/ColorMap';

import Nav from './Nav';
import Slots from './Views/Slots';



const Spacer = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.brand.primary};
`;

const ViewContainer = styled.div`
  height: 430px;
  overflow-x: hidden;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const queryString = window.location.search.substring(1);
    const searchParams = new URLSearchParams(queryString);

    if (searchParams.has('colorMap')) {
      this.setState({
        colorMap: true,
      });
    }
  }
  render() {
    return(
      <ThemeProvider theme={HTLDarkTheme}>
        {this.state.colorMap ? <ColorMap></ColorMap>
        :
        (
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
        )
        }
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

