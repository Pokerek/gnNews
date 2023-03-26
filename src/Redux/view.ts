import { createSlice } from '@reduxjs/toolkit';

interface ViewState {
   isList: boolean;
}

const initialState: ViewState = {
   isList: true
};

const viewSlice = createSlice({
   name: 'view',
   initialState,
   reducers: {
      toggled(state) {
         state.isList = !state.isList;
      }
   }
});

export const { toggled } = viewSlice.actions;
export default viewSlice.reducer;
