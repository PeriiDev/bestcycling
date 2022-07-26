import { configureStore } from '@reduxjs/toolkit'
import { userProfileSlice, subscriptionSlice } from './slices'

export const store = configureStore({
    reducer: {
        userProfile: userProfileSlice.reducer,
        subscription: subscriptionSlice.reducer,
    }
})