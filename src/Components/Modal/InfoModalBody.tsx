import React from 'react';
import { Box, Typography, Link, Divider, List, ListItem } from '@mui/material';

export default function InfoModalBody() {
   return (
      <Box>
         <Typography variant="h4">Co dał mi projekt?:</Typography>
         <List sx={{ marginLeft: -1 }}>
            <ListItem>
               <Typography variant="h5">Nauka react-redux</Typography>
            </ListItem>
            <ListItem>
               <Typography variant="h5">
                  Przetestowanie Material UI w boju
               </Typography>
            </ListItem>
            <ListItem>
               <Typography variant="h5">
                  Stworzenie projektu opartego o 'dashboard' użytokownika
               </Typography>
            </ListItem>
         </List>
         <Divider />
         <Typography variant="h4" sx={{ marginTop: 1 }}>
            Co było najtrudniejsze?:
         </Typography>
         <List sx={{ marginLeft: -1 }}>
            <ListItem>
               <Typography variant="h5">Zrozumienie konceptów w MUI</Typography>
            </ListItem>
            <ListItem>
               <Typography variant="h5">
                  Konfiguracja react-pro-slider
               </Typography>
            </ListItem>
         </List>
      </Box>
   );
}
