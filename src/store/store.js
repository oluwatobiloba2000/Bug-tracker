import { configureStore } from '@reduxjs/toolkit';
import bugReducer from '../reducer/bugReducer';
import userReducer from '../reducer/userReducer';
import {saveStateToLocalDB} from '../localStorage';

export  const store =  configureStore({
  reducer: {
    allBugs: bugReducer,
    currentUser: userReducer
  },
});

store.subscribe(()=>{
  saveStateToLocalDB({
    allbugs : store.getState().allBugs,
    currentUser: store.getState().currentUser
  })
})