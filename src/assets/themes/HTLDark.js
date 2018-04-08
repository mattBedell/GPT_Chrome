import { injectGlobal } from 'styled-components';


import ralewayRegular from './../fonts/Raleway/Raleway-Regular.ttf';
import ralewayMedium from './../fonts/Raleway/Raleway-Medium.ttf';
import ralewayBold from './../fonts/Raleway/Raleway-Bold.ttf';
import ralewayBlack from './../fonts/Raleway/Raleway-Black.ttf';


const Styles = {

    brand: {
      primary: '#3988E3',
      // brandPrimary: '#3097D1',
      info: '#8eb4cb',
      success: '#2ab27b',
      warning: '#cbb956',
      danger: '#bf5329',
    },

    menu: {
      primary: '#414955',
      expanded: '#5A6471',
    },
  
    icon: {
      primary: '#3988e3',
      highlighted: '#FFBA0B',
      closed: '#7288a3',
    },

    global: {
      bodyBg: '#616C79',
      textColor: '#F6F7FB',
    },
};

injectGlobal`
  @font-face {
    font-family: 'Raleway';
    src: url(${ralewayRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${ralewayMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${ralewayBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${ralewayBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  * {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: ;
    color: ${Styles.global.textColor};
    box-sizing: border-box;
  }

  body {
    box-sizing: content-box;
    background-color: ${Styles.global.bodyBg};
    width: 400px;
    height: 500px;
  }
`;






export default Styles;