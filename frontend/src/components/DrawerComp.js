import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{
        sx:{backgroundColor:'rgba(49,49,116,1)'}
      }} open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={()=> setOpen(false)} key={index}divider>
              <ListItemIcon>
                <ListItemText sx={{color:'white'}}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: 'auto', color: 'white' }}
        onClick={() => setOpen(!open)}
      >
        <ListRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
