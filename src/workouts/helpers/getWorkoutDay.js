export const getWorksoutDay = (dateInNumber) => {
    const options = { month: "short", day: "numeric" };
    return new Date(dateInNumber).toLocaleDateString("es", options);
}