import React from 'react'
import './App.css';
import icon from './images/account.jpg'
import SideNav from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Container, Typography, Grid, Grow, AppBar } from '@mui/material'

function App() {
  return (
    <div className="App" >
      <body>
        <Container maxWidth='lg'>
          <AppBar position='static' color='inherit'>
            <Typography variant='h2' align='center'>Your Products</Typography>
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>

                </Grid>
                <Grid item xs={12} sm={7}>
                  
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </body>
      <SideNav>
        <div class="sidebar">
          <img src={icon} className="account" alt="Logo" />
          <br></br>
          <br></br>
          <a href="#news">Profile</a>
          <a class="active" href="#home">Products</a>
          <a href="#contact">Orders</a>
          <a href="#about">Shipment</a>
          <a href="#about">Transactions</a>
          <a href="#about">Security</a>
        </div>
      </SideNav>
    </div>
  );
}

export default App;
