function distanceFromHqInBlocks(destination) {
    const distanceBlocks = Math.abs(42 - destination);
    return distanceBlocks;
};

function distanceFromHqInFeet(destination) {
    const distanceFeet = Math.abs(42 - destination)*264;
    return distanceFeet;
};

function distanceTravelledInFeet(start, destination) {
    const distanceTravelled = Math.abs(start - destination)*264;
    return distanceTravelled;
};

function calculatesFarePrice(start, destination) {
    const distanceTravelled = Math.abs(start - destination)*264;
    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled <= 2000) {
        return 0.02 * (distanceTravelled - 400);
    } else if (distanceTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
};


