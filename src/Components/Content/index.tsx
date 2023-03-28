import React from 'react';
import { Box, Typography } from '@mui/material';

import ListView from './ListView';
import GridView from './GridView';
import { useAppSelector } from '../../Hooks/reduxHooks';
import EmptyView from './EmptyView';
import { useTranslation } from 'react-i18next';
import {
   getCountryByName,
   getCountryName
} from '../../Data/Countries/countries';

export default function Content() {
   const isList = useAppSelector((state) => state.view.isList);
   const articles = useAppSelector((state) => state.articles.articles);
   const country = useAppSelector((state) => state.articles.country);
   const { t, i18n } = useTranslation();

   let body = <EmptyView />;

   if (articles.length) {
      body = isList ? (
         <ListView articles={articles} />
      ) : (
         <GridView articles={articles} />
      );
   }

   return (
      <Box flex={4}>
         <Box className="centerContent" p={1}>
            <Typography textAlign="center" variant="h2">
               {t('contentTitle')}{' '}
               {country
                  ? getCountryName(country.name, i18n.language)
                  : t('worldwide')}
            </Typography>
            {body}
         </Box>
      </Box>
   );
}
