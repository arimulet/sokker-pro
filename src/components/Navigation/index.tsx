import React from 'react';

import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home } from '@mui/icons-material'
import Profile from '@/components/profile';

const Navigation = () => {
  return (<Drawer variant='permanent'>
    
          <Profile />      
    
    <Divider />
    <List>
      <ListItem>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText>
          Primer item
        </ListItemText>        
      </ListItem>
      

    </List>
  </Drawer>)
}

export default Navigation