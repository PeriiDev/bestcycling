import { setUserProfile, startLoadingUserProfile } from "./userProfileSlice"


export const getDataUserProfile = () => {
    return async (dispatch, getState) => {

        dispatch(startLoadingUserProfile())
        const resp = await fetch('https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json');
        const data = await resp.json();


        const workoutsChecked = new Array(data.training_classes.length).fill(false);

        const workouts = data.training_classes.map( w => {
            return {
                ...w,
                completed: false,
                checked: false,
            }
        })


        dispatch(setUserProfile({
            isLoading: false,
            profile: data.profile,
            categories: data.categories,
            instructors: data.instructors,
            training_classes: workouts,
            workoutsChecked: workoutsChecked,
        }))
    }
}