import type { AppProps } from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Box from "@mui/material/Box";

import "@/styles/globals.scss";
// Estilos de páginas
// import "./index.scss";
// // Estilos de componentes
// import "@/components/profile/styles.scss";
// import "@/components/LoginForm/styles.scss";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <UserProvider>
    //   <Box sx={{ 
    //     display: 'flex', 
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     minHeight: '100vh',
    //     width: '100%'
    //   }}>
    <Component {...pageProps} />
    // </Box>
    // </UserProvider>
  );
}
