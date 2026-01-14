import type { AppProps } from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Box from "@mui/material/Box";
import Navigation from "@/components/Navigation";

import "./globals.scss";
// Estilos de páginas
import "./index.scss";
// Estilos de componentes
import "@/components/profile/styles.scss";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh'}}>
        <Box component='nav' width={200} sx={{ flexShrink: { sm: 0 }}} >
          <Navigation />
        </Box>

        <Box>
          {/* { Header} */}
          <Box>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
    </UserProvider>
  );
}
