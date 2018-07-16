import React, { Component } from 'react'
import './App.css'
import Home from 'pages/home/home'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import { BrowserRouter, Link, Route } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: red,
  },
  status: {
    danger: 'orange',
  },
})

function Test(params) {
  return <div>Test</div>
}
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Home />
          {/* <BrowserRouter>
            <div>
              <div>
                <Link to="/">home</Link>
                <Link to="/test">to test</Link>
              </div>
              <Route path="/test" component={Test}></Route>
              <Route path="/" exact component={Home}></Route>
            </div>
          </BrowserRouter> */}
        </MuiThemeProvider>
      </div>
    )
  }
}
