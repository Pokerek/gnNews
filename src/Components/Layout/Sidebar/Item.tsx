import React from 'react';
import { MenuItem, menuClasses } from 'react-pro-sidebar';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../../theme';

import '/node_modules/flag-icons/css/flag-icons.min.css';

import {
   convertCountryToPath,
   getCountryByName
} from '../../../Data/Countries/countries';

type ItemProps = {
   name: string;
   active: boolean;
   collapsed: boolean;
   handleClick: (name: string) => void;
};

export default function Item({
   name,
   active,
   collapsed,
   handleClick
}: ItemProps) {
   const country = getCountryByName(name);
   if (!country) return <></>;
   const path = convertCountryToPath(name);
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

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
         component={<Link to={`/country${path}`} />}
      >
         <Box
            display="flex"
            gap={collapsed ? 0 : 2}
            justifyContent={collapsed ? 'center' : 'start'}
            alignItems="center"
            onClick={() => handleClick(name)}
         >
            <Typography className={`fi fis fi-${country.code}`} fontSize={20} />
            <Typography fontSize={15}>{collapsed ? '' : name}</Typography>
         </Box>
      </MenuItem>
   );
}
