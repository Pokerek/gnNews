import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

import { articles } from '../../Data/Articles/articles';
import ListView from './ListView';
import GridView from './GridView';
import { useAppSelector } from '../../Redux/hooks';
import NewsModal from './NewsModal';

type ContentProps = {
   country: {
      name: string;
      code: string;
   };
};

export default function Content({ country }: ContentProps) {
   const isList = useAppSelector((state) => state.view.isList);

   return (
      <Box flex={4}>
         <NewsModal />
         <Box className="centerContent" p={1}>
            <Typography textAlign="center" variant="h2">
               News from {country.name}
            </Typography>
            {isList ? (
               <ListView articles={articles} />
            ) : (
               <GridView articles={articles} />
            )}
         </Box>
      </Box>
   );
}
