import { configureStore } from '@reduxjs/toolkit'
import { userProfileSlice } from './slices/userProfile/userProfileSlice'

export const store = configureStore({
    reducer: {
        userProfile: userProfileSlice.reducer,
    }
})