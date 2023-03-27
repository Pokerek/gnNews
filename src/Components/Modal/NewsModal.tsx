import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { News } from '../../Data/Articles/articles';
import { tokens } from '../../theme';

type Props = {
   article: News | null;
};

export default function NewsModal({ article }: Props) {
   if (!article)
      return <Typography>Something goes wrong with loading article</Typography>;

   const theme = useTheme();
   const { mode } = theme.palette;
   const colors = tokens(mode);

   return (
      <Box>
         <Typography>{article.author}</Typography>
         <Typography variant="h4">{article.title}</Typography>
         <Typography sx={{ mt: 2 }}>{article.content}</Typography>
         <Link href={article.url}>
            <Typography
               textAlign="end"
               fontSize={20}
               color={colors.primary[100]}
            >
               Source
            </Typography>
         </Link>
      </Box>
   );
}
