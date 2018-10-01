import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import { setView } from '../actions/nav';
import { getSelectedView } from '../reducers/nav';

import HTLDarkTheme from '../assets/themes/HTLDark';
import ColorMap from './Theme/ColorMap';

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
    const { selectedView, setViewComp } = this.props;
    const { colorMap } = this.state;
    return (
      <ThemeProvider theme={HTLDarkTheme}>
        {colorMap ? <ColorMap />
          : (
          <>
            <Nav
              selectedView={selectedView}
              setSelected={setViewComp}
            />
            <Spacer />
            <ViewContainer>
              <Slots />
            </ViewContainer>
          </>
          )
        }
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => (
  {
    selectedView: getSelectedView(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    setViewComp: view => dispatch(setView(view)),
  }
);

App.propTypes = {
  selectedView: PropTypes.string.isRequired,
  setViewComp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
