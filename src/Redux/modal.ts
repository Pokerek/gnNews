import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News } from '../Data/Articles/articles';

type BodyType = 'info' | 'news';
interface ModalState {
   isOpen: boolean;
   type: BodyType;
   article: News | null;
}

const initialState: ModalState = {
   isOpen: false,
   type: 'info',
   article: null
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      opened(state, action: PayloadAction<{ article?: News; type: BodyType }>) {
         state.isOpen = true;
         state.type = action.payload.type;

         if (action.payload.article) {
            state.article = action.payload.article;
         } else {
            state.article = null;
         }
      },
      closed(state) {
         state.isOpen = false;
      }
   }
});

export const { opened, closed } = modalSlice.actions;
export default modalSlice.reducer;
