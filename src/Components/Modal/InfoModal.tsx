import React from 'react';
import { Box, Typography, Divider, List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function InfoModal() {
   const { t } = useTranslation();
   return (
      <Box>
         <Typography variant="h4">{t('questions.pros')}:</Typography>
         <List sx={{ marginLeft: -1 }}>
            <ListItem>
               <Typography variant="h5">{t('answers.pros1')}</Typography>
            </ListItem>
            <ListItem>
               <Typography variant="h5">{t('answers.pros2')}</Typography>
            </ListItem>
            <ListItem>
               <Typography variant="h5">{t('answers.pros3')}</Typography>
            </ListItem>
         </List>
         <Divider />
         <Typography variant="h4" sx={{ marginTop: 1 }}>
            {t('questions.cons')}:
         </Typography>
         <List sx={{ marginLeft: -1 }}>
            <ListItem>
               <Typography variant="h5">{t('answers.cons1')}</Typography>
            </ListItem>
            <ListItem>
               <Typography variant="h5">{t('answers.cons2')}</Typography>
            </ListItem>
            <ListItem>
               <Typography variant="h5">{t('answers.cons3')}</Typography>
            </ListItem>
         </List>
      </Box>
   );
}
