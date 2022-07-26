import { setAutoSubscription, setAutoSubscriptionRenove, setFinishSubscription, setNoSubscription, setRefreshTime, setSubscription, setSubscriptionOnInit } from "./subscriptionSlice";

const url = 'http://localhost/bestcycling-laravel/public/api/get';


export const checkSubscription = (idUser = 1) => {

    return async (dispatch, getState) => {

        const resp = await fetch(url);
        const data = await resp.json();

        const subscription = data.filter(m => m.id === idUser);
        if (subscription.length === 0) {
            return dispatch(setNoSubscription())
        }

        dispatch(setSubscriptionOnInit({
            active: subscription[0].active,
            auto: subscription[0].auto,
            id: subscription[0].id,
            time: subscription[0].time,
            extra_time: subscription[0].extra_time,
        }))

    }
}

export const updateSubscription = (autoSubcription, timeSubscription) => {
    return async (dispatch, getState) => {

        autoSubcription
            ? dispatch(setAutoSubscription({ time: timeSubscription }))
            : dispatch(setSubscription({ time: timeSubscription }));

        const { subscription } = getState();
        const { active, auto, id, time, extra_time } = subscription;
        const urlUpdate = `http://localhost/bestcycling-laravel/public/api/update/${id}`;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ active, auto, time, extra_time })
        };
        await fetch(urlUpdate, requestOptions);

    }
}
export const refreshSubscription = () => {
    return async (dispatch, getState) => {
        const { subscription } = getState();
        const { active, auto, id, time, extra_time } = subscription;
        const urlUpdate = `http://localhost/bestcycling-laravel/public/api/update/${id}`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ active, auto, time, extra_time })
        };
        await fetch(urlUpdate, requestOptions);
    }
}

export const finishedSubscription = () => {
    return async (dispatch, getState) => {
        const { subscription } = getState();
        const { auto, id, time, extra_time } = subscription;
        const urlUpdate = `http://localhost/bestcycling-laravel/public/api/update/${id}`;

        auto ? dispatch(setAutoSubscriptionRenove()) : dispatch(setFinishSubscription())

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ active: auto, auto, time: auto ? extra_time : time, extra_time })
        };
        await fetch(urlUpdate, requestOptions);
    }
}

export const refreshTime = () => {
    return async (dispatch, getState) => {
        dispatch(setRefreshTime());
        const { subscription } = getState();
        const { active, auto, id, time, extra_time } = subscription;
        const urlUpdate = `http://localhost/bestcycling-laravel/public/api/update/${id}`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ active, auto, time, extra_time })
        };
        await fetch(urlUpdate, requestOptions);

    }
}

