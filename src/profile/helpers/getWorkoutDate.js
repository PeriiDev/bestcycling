export const getWorksoutDate = (dateInNumber) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateInNumber).toLocaleDateString("es", options);
}