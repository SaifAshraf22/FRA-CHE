import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box } from '@mui/system';
const Navbar = ({ links }) => {
  const [value, setValue] = useState();

  return (
    <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(180,58,58,1) 2%, rgba(49,49,116,1) 36%, rgba(105,0,161,1) 73%, rgba(166,85,252,1) 100%)'}}>
      <Toolbar>
        <Grid sx={{placeItems:'center'}} container>
          <Grid item xs={2}>
            <Typography>
              <ShoppingBasketIcon />
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              {links.map((link, index) => (
                <Tab key={index} label={link} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Box display="flex">
              <Button sx={{marginLeft:"auto",background:'rgba(180,58,58,1)'}} variant="contained">Login</Button>
              <Button sx={{marginLeft:1,background:'rgba(180,58,58,1)'}} variant="contained">Signup</Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
