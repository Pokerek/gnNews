import React from 'react';
import { Box, Typography, Divider, useTheme } from '@mui/material';
import Clock from '../../Custom/Clock';
import { tokens } from '../../../theme';

export default function Footer() {
   const theme = useTheme();
   const { mode } = theme.palette;
   const colors = tokens(mode);
   return (
      <Box
         display="flex"
         justifyContent="end"
         alignItems="center"
         gap={2}
         p={2}
         height="60px"
         borderTop={`1px solid ${colors.primary[100]}`}
      >
         <Typography variant="h4">Total articles: 100</Typography>
         <Divider orientation="vertical" flexItem />
         <Typography variant="h4">Time: {<Clock />}</Typography>
      </Box>
   );
}
