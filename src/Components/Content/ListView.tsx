import React from 'react';
import { List, ListItem, ListItemButton, Grid } from '@mui/material';
import { useAppDispatch } from '../../Redux/hooks';
import { opened } from '../../Redux/modal';
import { News } from '../../Data/Articles/articles';

type Props = {
   articles: any[];
};

export default function ListView({ articles }: Props) {
   const dispatch = useAppDispatch();

   const handleOpen = (article: News) => {
      dispatch(opened(article));
   };

   return (
      <List>
         {articles.map((article, index) => (
            <ListItem
               key={article.url}
               divider={index !== articles.length - 1}
               disablePadding
            >
               <ListItemButton
                  onClick={() => {
                     handleOpen(article);
                  }}
               >
                  <Grid container>
                     <Grid item xs={8}>
                        {article.title}
                     </Grid>

                     <Grid item xs={2}>
                        {article.source.name}
                     </Grid>

                     <Grid item xs={2}>
                        {new Date(article.publishedAt).toLocaleString()}
                     </Grid>
                  </Grid>
               </ListItemButton>
            </ListItem>
         ))}
      </List>
   );
}
