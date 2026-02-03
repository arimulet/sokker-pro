import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, SportsSoccer, Settings } from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard /> },
    { text: 'Jugadores', icon: <People /> },
    { text: 'Equipos', icon: <SportsSoccer /> },
    { text: 'Configuración', icon: <Settings /> },
  ];

  return (
    <nav>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  )
}

export default Sidebar;
