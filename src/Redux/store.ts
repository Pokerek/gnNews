import { configureStore } from '@reduxjs/toolkit';
import viewReducer from './view';
import modalReducer from './modal';

export const store = configureStore({
   reducer: {
      view: viewReducer,
      modal: modalReducer
   }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
