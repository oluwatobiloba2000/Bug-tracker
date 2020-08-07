import {
    BUG_ADDED,
    BUG_REMOVED,
    BUG_RESOLVED,
    BUG_EDITED,
    BUG_FETCHED
} from '../action/actionTypes';
import {loadStateFromLocalDB} from '../localStorage';
import { nanoid } from 'nanoid'

const initialState = loadStateFromLocalDB() ? loadStateFromLocalDB().allbugs : []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case BUG_FETCHED:
         return [...state, ...action.payload]
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: nanoid(),
                    description: action.payload.description,
                    createdat: action.payload.createdat,
                    editedat: null,
                    resolved: false,
                    resolvedat: null
                }
            ]
        case BUG_EDITED:
            return state.map(bug => {
                if (bug.id === action.payload.id) {
                    return {
                        ...bug,
                        ...action.payload.updatedBug
                    }
                } else {
                    return bug
                }
            })

        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)

        case BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {
                ...bug,
                resolved: true,
                resolvedat: action.payload.resolvedat,
            })

        default:
            return state
    }
}