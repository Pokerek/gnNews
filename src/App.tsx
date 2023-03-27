import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { ColorModeContext, useMode } from './theme';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Sidebar from './Components/Layout/Sidebar';
import Content from './Components/Content';
import { Route, Routes } from 'react-router-dom';
import { convertCountryToPath, countries } from './Data/Countries/countries';
import Modal from './Components/Modal';

export default function App() {
   const [theme, colorMode] = useMode();

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
                        <Routes>
                           <Route
                              path="/"
                              element={
                                 <Content
                                    country={{ name: 'Poland', code: 'pl' }}
                                 />
                              }
                           />
                           {countries.map((country) => (
                              <Route
                                 key={country.name}
                                 path={`/country${convertCountryToPath(
                                    country.name
                                 )}`}
                                 element={<Content country={country} />}
                              />
                           ))}
                        </Routes>
                        <Footer />
                     </Box>
                  </main>
               </div>
            </ProSidebarProvider>
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}
