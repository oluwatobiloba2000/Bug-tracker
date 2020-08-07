import {UPDATED_USER, FETCHED_USER} from  '../action/actionTypes';
import {loadStateFromLocalDB} from '../localStorage';

const initialState = {
    username: loadStateFromLocalDB() ? loadStateFromLocalDB().currentUser.username : null ,
    colorMode: loadStateFromLocalDB() ? loadStateFromLocalDB().currentUser.colorMode : 'light'
}

export default function (state = initialState, action){
    switch(action.type){
      case UPDATED_USER:
            return {
                ...state,
                ...action.payload.updatedUser
            }
      case FETCHED_USER:
            return {
                ...state,
                ...action.payload.user
            }
          
     default:
     return state;
    }
}