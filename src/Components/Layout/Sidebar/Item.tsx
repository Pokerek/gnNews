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
import { changeCountry, loadingArticles } from '../../../Redux/articles';
import { useTranslation } from 'react-i18next';

type ItemProps = {
   country: Country;
   active: boolean;
   collapsed: boolean;
};

export default function Item({ country, active, collapsed }: ItemProps) {
   const path = convertCountryToPath(country.name);
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   const { i18n } = useTranslation();
   const language = i18n.language;
   const countryName = language === 'en' ? country.en : country.pl;

   const dispatch = useAppDispatch();

   const handleCountryChange = () => {
      dispatch(loadingArticles({ code: country.code }));
      dispatch(changeCountry(country));
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
         >
            <Typography className={`fi fis fi-${country.code}`} fontSize={20} />
            <Typography fontSize={15}>
               {collapsed ? '' : countryName}
            </Typography>
         </Box>
      </MenuItem>
   );
}
