import { createMuiTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import { Apps, ContactMail, Info, Work } from '@material-ui/icons';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import viewStyles from './viewStyles';

import { blue } from '@material-ui/core/colors';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import Projects from './Projects';
import Skills from './Skills';


const View: React.FunctionComponent = () => {
  const componentRoutes = [
    { path: 'About', icon: <Info /> },
    { path: 'Projects', icon: <Apps /> },
    { path: 'Skills', icon: <Work /> },
    { path: 'Contact', icon: <ContactMail /> },
  ];

  const viewClasses = viewStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        contrastText: '#fff',
        main: blue[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={viewClasses.root}>
        <CssBaseline />

        <Navigation
          compRoutes={componentRoutes}
        />

        <main className={viewClasses.content}>
          <div className={viewClasses.toolbar} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Router>
                <Route path={`/About`} exact component={About} />
                <Route path={`/Projects`} component={Projects} />
                <Route path={`/Skills`} component={Skills} />
                <Route path={`/Contact`} component={Contact} />
              </Router>
            </Grid>
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default View;
