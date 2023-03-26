import { News, articles } from './../Data/Articles/articles';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
   isOpen: boolean;
   article: News;
}

const initialState: ModalState = {
   isOpen: false,
   article: articles[0]
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      opened(state, action: PayloadAction<News>) {
         state.isOpen = true;
         state.article = action.payload;
      },
      closed(state) {
         state.isOpen = false;
      }
   }
});

export const { opened, closed } = modalSlice.actions;
export default modalSlice.reducer;
