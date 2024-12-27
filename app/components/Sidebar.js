import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Face6Icon from '@mui/icons-material/Face6';
import FileOpenIcon from '@mui/icons-material/FileOpen';


const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
    icon: <DashboardIcon />,
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <Face6Icon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <FileOpenIcon />,
  },
];

export default function Sidebar() {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {NAVIGATION.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent" 
      anchor="left"
    >
      {DrawerList}
    </Drawer>
  );
}
