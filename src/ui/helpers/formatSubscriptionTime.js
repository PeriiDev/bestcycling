//time: number in seconds
export const formatSubscriptionTime = (time) => {
    const minutes = Math.floor(time / 60);
    const restSeconds = time - (minutes * 60);
    return `${minutes}.${restSeconds <= 9 ? '0' + restSeconds : restSeconds}`;
}