import { useEffect } from 'react';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { ColorModeContext, useMode } from './theme';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Sidebar from './Components/Layout/Sidebar';
import Modal from './Components/Modal';
import Routes from './Components/Routes';
import { useAppDispatch } from './Hooks/reduxHooks';
import { loadingArticles } from './Redux/articles';

export default function App() {
   const [theme, colorMode] = useMode();

   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(loadingArticles({ code: 'xx' }));
   });

   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <ProSidebarProvider>
               <div className="app">
                  <Modal />
                  <Sidebar />
                  <main className="content">
                     <Box>
                        <Header />
                        <Routes />
                        <Footer />
                     </Box>
                  </main>
               </div>
            </ProSidebarProvider>
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}
