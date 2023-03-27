import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function EmptyView() {
   const { t } = useTranslation();
   return (
      <Box
         display="flex"
         height={300}
         alignItems="center"
         justifyContent="center"
      >
         <Typography variant="h3">{t('noArticles')}</Typography>
      </Box>
   );
}
