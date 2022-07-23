export const getInstructorById = (instructors, idInstructor) => {
    return instructors.find(instructor => instructor.id === idInstructor)
}