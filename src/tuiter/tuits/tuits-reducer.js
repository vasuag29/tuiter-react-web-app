import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk
} from "../../services/tuits-thunks";

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "userImage": "/images/image_relativity_space.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState,
                                   extraReducers: {
                                       [findTuitsThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.tuits = []
                                           },
                                       [findTuitsThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [findTuitsThunk.rejected]:
                                           (state) => {
                                               state.loading = false
                                           },
                                       [deleteTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false
                                               state.tuits = state.tuits
                                                   .filter(t => t._id !== payload)
                                           },
                                       [createTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false
                                               state.tuits.push(payload)
                                           },
                                       [updateTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false
                                               const tuitNdx = state.tuits
                                                   .findIndex((t) => t._id === payload._id)
                                               state.tuits[tuitNdx] = {
                                                   ...state.tuits[tuitNdx],
                                                   ...payload
                                               }
                                           }
                                   },
                                   reducers: {
                                       createTuit(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       },
                                       deleteTuit(state, action) {
                                           const index = state
                                               .findIndex(tuit =>
                                                              tuit._id === action.payload);
                                           state.splice(index, 1);
                                       },
                                       likeTuitToggle(state, action) {
                                           const tuit = state.find(
                                               (tuit) =>
                                                   tuit._id === action.payload._id)
                                           tuit.liked = !tuit.liked;
                                       }
                                   }
                               });

export const {
    createTuit,
    deleteTuit,
    likeTuitToggle
} = tuitsSlice.actions
export default tuitsSlice.reducer;