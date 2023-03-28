import React, { useState } from 'react';
import { Sidebar as SidebarMenu, Menu, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, useTheme, InputBase } from '@mui/material';
import { tokens } from '../../../theme';
import Item from './Item';

import '/node_modules/flag-icons/css/flag-icons.min.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { searchCountries } from '../../../Data/Countries/countries';
import { useAppSelector } from '../../../Hooks/reduxHooks';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
   const theme = useTheme();
   const { collapseSidebar, collapsed } = useProSidebar();
   const colors = tokens(theme.palette.mode);
   const selectedCountry = useAppSelector((state) => state.articles.country);

   const { t, i18n } = useTranslation();

   const [search, setSearch] = useState('');
   const handleSearchChange = (text: string) => {
      setSearch(text);
   };
   const countries = searchCountries(search, i18n.language);

   return (
      <div className="sidebar">
         <SidebarMenu
            backgroundColor={
               theme.palette.mode === 'dark' ? colors.primary[500] : ''
            }
            style={{ height: '100vh', border: 'none' }}
            defaultCollapsed
         >
            <Menu>
               <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={collapsed ? 'center' : 'space-Between'}
                  p={1}
                  borderBottom={`1px solid ${colors.primary[100]}`}
                  height="70px"
               >
                  {!collapsed && (
                     <Box px={2} display="flex">
                        <InputBase
                           onChange={(e) => handleSearchChange(e.target.value)}
                           placeholder={`${t('search')}`}
                           value={search}
                           sx={{
                              border: `1px solid ${colors.primary[400]}`,
                              padding: '.25rem .5rem',
                              borderRadius: '.5rem'
                           }}
                        />
                     </Box>
                  )}
                  <IconButton size="large" onClick={() => collapseSidebar()}>
                     <MenuOutlinedIcon fontSize="large" />
                  </IconButton>
               </Box>
            </Menu>
            <Menu className="centerContent">
               {countries.map((country) => (
                  <Item
                     active={selectedCountry?.name === country.name}
                     key={country.code}
                     country={country}
                     collapsed={collapsed}
                  />
               ))}
            </Menu>
            <Box borderBottom={`1px solid ${colors.primary[100]}`} />
         </SidebarMenu>
      </div>
   );
}
