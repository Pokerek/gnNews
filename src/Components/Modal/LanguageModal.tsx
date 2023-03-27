import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuItem, MenuList } from '@mui/material';
import { useAppDispatch } from '../../Hooks/reduxHooks';
import { closed } from '../../Redux/modal';

export default function LanguageModal() {
   const { t, i18n } = useTranslation();
   const dispatch = useAppDispatch();

   const handleLanguageChange = (lang: string) => {
      dispatch(closed());
      i18n.changeLanguage(lang);
   };

   return (
      <Box>
         <Typography variant="h4">{t('changeLanguage')}:</Typography>
         <MenuList>
            <MenuItem onClick={() => handleLanguageChange('en')}>
               English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange('pl')}>
               Polski
            </MenuItem>
         </MenuList>
      </Box>
   );
}
