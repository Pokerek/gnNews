import React from 'react';
import {
   Typography,
   Grid,
   Card,
   CardContent,
   CardMedia,
   Button,
   Box
} from '@mui/material';
import { News } from '../../Data/Articles/articles';
import NewsModal from './NewsModal';
import { useAppDispatch } from '../../Redux/hooks';
import { opened } from '../../Redux/modal';

type Props = {
   articles: News[];
};

export default function GridView({ articles }: Props) {
   const dispatch = useAppDispatch();

   const handleOpen = (article: News) => {
      dispatch(opened(article));
   };

   return (
      <Grid container spacing={2}>
         {articles.map((article) => {
            const image = article?.urlToImage;
            return (
               <Grid item xs={12} md={6} lg={4} key={article.url}>
                  <Button
                     sx={{ textAlign: 'left' }}
                     onClick={() => handleOpen(article)}
                  >
                     <Card sx={{ height: 300 }}>
                        {image ? (
                           <CardMedia sx={{ height: 140 }} image={image} />
                        ) : (
                           <Box height={140} />
                        )}
                        <CardContent>
                           <Box display="flex" justifyContent="space-between">
                              <Typography>{article.source.name}</Typography>

                              <Typography>
                                 {new Date(
                                    article.publishedAt
                                 ).toLocaleString()}
                              </Typography>
                           </Box>
                           <Typography variant="h5">{article.title}</Typography>
                        </CardContent>
                     </Card>
                  </Button>
               </Grid>
            );
         })}
      </Grid>
   );
}
