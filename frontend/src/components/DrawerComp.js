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
const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>Products</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </List>
      </Drawer>
      <IconButton>
        <ListRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
