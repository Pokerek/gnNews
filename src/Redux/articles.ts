import { articles, fetchArticles } from './../Data/Articles/articles';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News } from '../Data/Articles/articles';

interface ArticlesState {
   total: number;
   articles: News[];
   country: string;
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
   error: string | null;
}

const initialState: ArticlesState = {
   total: articles.length,
   articles: [],
   country: 'Worldwide',
   status: 'idle',
   error: null
};

interface ApiOptions {
   code: string;
}
interface ApiSuccessResponse {
   articles: News[];
}

export const loadingArticles = createAsyncThunk<ApiSuccessResponse, ApiOptions>(
   'article/loading',
   async (options, thunkAPI) => {
      const articles = await fetchArticles(options.code);
      if (articles === null) {
         return thunkAPI.rejectWithValue('Error fetching articles');
      }
      return { articles };
   }
);

const articlesSlice = createSlice({
   name: 'articles',
   initialState,
   reducers: {
      changeCountry(state, action: PayloadAction<string>) {
         state.country = action.payload;
      }
   },
   extraReducers(builder) {
      builder.addCase(loadingArticles.pending, (state) => {
         state.status = 'loading';
      });
      builder.addCase(loadingArticles.fulfilled, (state, action) => {
         state.status = 'succeeded';
         state.articles = action.payload.articles;
         state.total = action.payload.articles.length;
      });
      builder.addCase(loadingArticles.rejected, (state) => {
         state.status = 'failed';
         state.error = 'Something went wrong!';
      });
   }
});

export const { changeCountry } = articlesSlice.actions;
export default articlesSlice.reducer;
