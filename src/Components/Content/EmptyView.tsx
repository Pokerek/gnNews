import React from 'react';
import { Box, Typography } from '@mui/material';

export default function EmptyView() {
   return (
      <Box
         display="flex"
         height={300}
         alignItems="center"
         justifyContent="center"
      >
         <Typography variant="h3">No articles found!</Typography>
      </Box>
   );
}
