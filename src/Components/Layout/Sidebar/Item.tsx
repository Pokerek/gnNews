import React from 'react';
import { MenuItem, menuClasses } from 'react-pro-sidebar';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../../theme';

import '/node_modules/flag-icons/css/flag-icons.min.css';

import {
   Country,
   convertCountryToPath
} from '../../../Data/Countries/countries';
import { useAppDispatch } from '../../../Hooks/reduxHooks';
import { loadingArticles } from '../../../Redux/articles';

type ItemProps = {
   country: Country;
   active: boolean;
   collapsed: boolean;
   handleClick: (name: string) => void;
};

export default function Item({
   country,
   active,
   collapsed,
   handleClick
}: ItemProps) {
   const path = convertCountryToPath(country.name);
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   const dispatch = useAppDispatch();

   const handleCountryChange = () => {
      dispatch(loadingArticles(country.code));
   };

   return (
      <MenuItem
         rootStyles={{
            ['.' + menuClasses.active]: {
               backgroundColor: `${colors.grey[100]}!important`,
               color: colors.grey[900]
            },
            ['.' + menuClasses.button]: {
               '&:hover': {
                  color: colors.primary[700]
               }
            }
         }}
         active={active}
         component={
            <Link onClick={handleCountryChange} to={`/country${path}`} />
         }
      >
         <Box
            display="flex"
            gap={collapsed ? 0 : 2}
            justifyContent={collapsed ? 'center' : 'start'}
            alignItems="center"
            onClick={() => handleClick(country.name)}
         >
            <Typography className={`fi fis fi-${country.code}`} fontSize={20} />
            <Typography fontSize={15}>
               {collapsed ? '' : country.name}
            </Typography>
         </Box>
      </MenuItem>
   );
}
