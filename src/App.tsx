import React, { Component }  from 'react';
import './index.css';
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from './Main';
import { Add } from './Add';
import { Login } from './Login';

import { One } from './one';
import { Two } from './two';
import { Three } from './three';
import { Four } from './four';
import { Fri } from './fri';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// use default theme
// const theme = createMuiTheme();
// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#CDE0C9',
      main: '#80CBC4',
      dark: '#a5c79e',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#E0ECDE',
      main: '#FFFFFF',
    },
  },
});

export const App = () =>{
    return(
    
      
        
        <BrowserRouter  basename={window.location.pathname || ''}>
          <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={ Login } />

          {'SinYi'} 
          <Route exact path="/main" component={ Main } />
          <Route exact path="/add" component={ Add } />
          <Route exact path="/one" component={ One } />
          
          {'Ready'}
          <Route exact path="/two" component={ Two } />

          {'Kevin'}
          <Route exact path="/three" component={ Three } />
          <Route exact path="/four" component={ Four } />
          <Route exact path="/fri" component={ Fri } />
        </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
      

    );
}

export default App;
