import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const defaultProfile = {
    firstName: 'Vasu',
    lastName: 'Agarwal',
    handle: 'vasuag29',
    profilePicture: '/images/image_elonmusk.jpeg',
    bannerPicture: '/images/image_jameswebb.jpeg',
    bio: 'CS Grad at Northeastern |\n'
         + 'Software engineer | Excited about interstellar human race | Exploring clean renewable energy and climate change solutions',
    website: 'vasuag29@github.io',
    location: 'Boston, MA',
    dateOfBirth: '1947-08-16',
    dateJoined: 'April 2009',
    followingCount: 34,
    followersCount: 420
};

const profileSlice = createSlice({
                                     name: "profile",
                                     initialState: defaultProfile,
                                     reducers: {
                                         updateProfile(state, action) {
                                             console.log(action.payload);
                                             return state = action.payload;
                                         }
                                     }
                                 });

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;