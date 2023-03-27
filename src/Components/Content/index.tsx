import React from 'react';
import { Box, Typography } from '@mui/material';

import ListView from './ListView';
import GridView from './GridView';
import { useAppSelector } from '../../Hooks/reduxHooks';

type ContentProps = {
   country?: {
      name: string;
      code: string;
   };
};

export default function Content({ country }: ContentProps) {
   const isList = useAppSelector((state) => state.view.isList);
   const articles = useAppSelector((state) => state.articles.articles);

   return (
      <Box flex={4}>
         <Box className="centerContent" p={1}>
            <Typography textAlign="center" variant="h2">
               News from {country?.name || 'worldwide'}
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
