export const getCheckedWorkouts = (training_classes) => {
    return training_classes.filter(workout => workout.checked)
}