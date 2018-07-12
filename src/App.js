import React, { Component } from 'react'
import './App.css'
import Home from 'pages/home/home'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: red,
  },
  status: {
    danger: 'orange',
  },
})
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Home />
        </MuiThemeProvider>
      </div>
    )
  }
}
