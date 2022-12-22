import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box } from '@mui/system';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';
const Navbar = ({ links }) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  const [value, setValue] = useState();

  return (
    <AppBar
      sx={{
        backgroundImage:
          'linear-gradient(90deg, rgba(180,58,58,1) 2%, rgba(49,49,116,1) 36%, rgba(105,0,161,1) 73%, rgba(166,85,252,1) 100%)',
      }}
    >
      <Toolbar>
        {isMatch ? (
          <> <Typography> 
           
        </Typography>
            <DrawerComp links={links}/>
            
            <Link to="/">  <ShoppingBasketIcon /></Link>
            
          </>
        ) : (
          <Grid sx={{ placeItems: 'center' }} container>
            <Grid item xs={2}>
              <Typography>
              <header>
          <Link to="/">FRAÎCHE</Link>
        </header> 
        <Link to="/"> <ShoppingBasketIcon /></Link>
                
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
                <Button
                  sx={{ marginLeft: 'auto', background: 'rgba(180,58,58,1)' }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: 'rgba(180,58,58,1)' }}
                  variant="contained"
                >
                  Signup
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
