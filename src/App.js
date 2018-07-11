import React, { Component } from 'react';
// import styles from './App.css';
// import './App.styl'
import './App.css'
// import CSSModules from 'react-css-modules';
import Home from 'pages/home/home'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Home />
        </MuiThemeProvider>
      </div>
    );
  }
}

// export default CSSModules(App, styles);
