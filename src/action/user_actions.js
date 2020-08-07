import * as actionTypes from './actionTypes';

export const userEdited = (updatedUser) => {
    return {
        type: actionTypes.UPDATED_USER,
        payload: {
            updatedUser
        }
    }
}

// export const fetchuser = ()=>{
//     const userFromLocalDB = localStorage.getItem('current-user');
//     const user = JSON.stringify(userFromLocalDB);
//     console.log(user)
//     return {
//         type: actionTypes.FETCHED_USER,
//         payload: {
//             user : 
//         }
//     }
// }