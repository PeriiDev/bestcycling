import { createSlice } from '@reduxjs/toolkit';

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: {
        active: false,
        auto: false,
        id: 1,
        time: 0,
        extra_time: 0,
    },
    reducers: {
        setNoSubscription: (state) => {
            state.active = false;
            state.auto = false;
            state.time = 0;
            state.id = 1;
            state.extra_time = 0;
        },
        setSubscriptionOnInit: (state, { payload }) => {
            state.active = payload.active;
            state.auto = payload.auto;
            state.id = payload.id;
            state.time = payload.time;
            state.extra_time = payload.extra_time;
        },
        setSubscription: (state, { payload }) => {
            console.log('aqui')
            state.active = true;
            state.auto = false;
            state.time += payload.time;
            state.extra_time = 0;
        },
        setAutoSubscription: (state, { payload }) => {
            console.log('autosubscrio')
            state.active = true;
            state.time += payload.time;
            state.extra_time = payload.time;
        },
        decrementTime: (state, action) => {
            (state.time <= 0) ? 0 : state.time -= action.payload;
        },
        setAutoSub: (state, { payload }) => {
            state.auto = payload;
        },
        setFinishSubscription: (state) => {
            console.log('finish sus')
            state.active = false;
            state.auto = false;
            state.time = 0;
            state.extra_time = 0;
        },
        setAutoSubscriptionRenove: (state, { payload }) => {
            console.log('setautorenove')
            state.active = true;
            state.auto = true;
            state.time = state.extra_time;
        },
        setRefreshTime: (state, {payload}) => {
            state.time = state.extra_time;
        }

    }
});


// Action creators are generated for each case reducer function
export const { setNoSubscription, setSubscriptionOnInit, setSubscription, setRefreshTime,
    setAutoSubscription, decrementTime, setFinishSubscription, setAutoSub, setAutoSubscriptionRenove } = subscriptionSlice.actions;