import * as actions from './actionTypes';
// const bugFetched = (bugs) => {
//     return {
//         type: actions.BUG_FETCHED,
//         payload: [
//             {
//                 createdat: "Mon Aug 03 2020 17:01:11 ",
//                 description: "Added bug from BD",
//                 editedat: null,
//                 id: 10,
//                 resolved: false
//                 },
            
//                 {
//                 createdat: "Mon Aug 03 2020 17:01:11",
//                 description: "Added bug 2 from BD",
//                 editedat: null,
//                 id: 200,
//                 resolved: false
//           }
//         ]
//     }
// }

const bugAdded = ({description}) => {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description,
            createdat : new Date().toISOString()
        }
    }
}

const bugRemoved = ({id}) =>{
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id
        }
    }
}

const bugResolve = ({id}) =>{
    return {
        type: actions.BUG_RESOLVED,
        payload: {
             id,
             resolvedat: new Date().toISOString()
        }
    }
}

const bugEdit = ({id, updatedBug}) =>{
    return{
        type: actions.BUG_EDITED,
        payload:{
            id,
            updatedBug
        }
    }
}


export {
    bugAdded,
    bugRemoved,
    bugResolve,
    bugEdit,
    // bugFetched
}