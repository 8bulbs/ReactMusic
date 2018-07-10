import React, { Component } from 'react'
import './App.styl'
import Home from 'pages/home/home'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

// const primary = red[500]; // #F44336
const primary = red[700]; // #d33a31

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    )
  }
}

export default App

