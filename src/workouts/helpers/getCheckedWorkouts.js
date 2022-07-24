export const getCheckedWorkouts = (training_classes) => {
    console.log('calculando clases')
    return training_classes.filter( workout => workout.checked )
}