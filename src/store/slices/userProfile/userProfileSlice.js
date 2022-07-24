import { createSlice } from '@reduxjs/toolkit';

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        profile: {},
        categories: [],
        instructors: [],
        training_classes: [],
        isLoading: false,
    },
    reducers: {
        startLoadingUserProfile: (state, /* action */) => {
            state.isLoading = true;
        },
        setUserProfile: (state, action) => {
            state.isLoading = false;
            state.profile = action.payload.profile,
                state.categories = action.payload.categories,
                state.instructors = action.payload.instructors,
                state.training_classes = action.payload.training_classes
            //state.workoutsChecked = action.payload.workoutsChecked
        },
        setCheckedWorkout: (state, action) => {
            console.log(action.payload)
            state.training_classes[action.payload].checked = !state.training_classes[action.payload].checked
        },
        setNextWorkout: (state, action) => {
            console.log(action.payload)
            state.training_classes.map(c => {
                if (c.id === action.payload) return c.completed = true;
                return c;
            })
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingUserProfile, setUserProfile, setCheckedWorkout, setNextWorkout } = userProfileSlice.actions;