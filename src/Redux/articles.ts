import { articles, fetchArticles } from './../Data/Articles/articles';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News } from '../Data/Articles/articles';

interface ArticlesState {
   total: number;
   articles: News[];
   status: string;
}

const initialState: ArticlesState = {
   total: articles.length,
   articles: [],
   status: 'idle'
};

export const loadingArticles = createAsyncThunk(
   'article/loading',
   async (code: string) => {
      const articles = await fetchArticles(code);
      return articles;
   }
);

const articlesSlice = createSlice({
   name: 'articles',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(loadingArticles.pending, (state) => {
         state.status = 'loading';
      });
      builder.addCase(
         loadingArticles.fulfilled,
         (state, action: PayloadAction<News[]>) => {
            state.status = 'succeeded';
            state.articles = action.payload;
            state.total = action.payload.length;
         }
      );
   }
});

export default articlesSlice.reducer;
