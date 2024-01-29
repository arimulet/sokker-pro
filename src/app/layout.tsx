import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer';
import { Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Profile from "@/components/profile";
import Navigation from "@/components/Navigation";

import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { getSession, Session } from '@auth0/nextjs-auth0';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  console.log(session?.user)
  
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Box sx={{ display: 'flex', minHeight: '100vh'}}>
            <Box component='nav' width={200} sx={{ flexShrink: { sm: 0 }}} >
              <Navigation />
            </Box>


            
            <Box>
                {/* { Header} */}
                <Box>
                  {children}
                </Box>
            </Box>
          </Box>
          

          
            {children}
          
          {/* <Drawer
           variant="permanent"
           ModalProps={{
             keepMounted: false,
           }}
          >
          
            <Profile />
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText>Principal</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText>Principal</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText>Principal</ListItemText>
              </ListItem>
            </List>

          </Drawer> */}         
          </body>
      </UserProvider>
    </html>
  );
}
