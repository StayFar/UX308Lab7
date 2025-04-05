function hello(name){
    return(`hello ${name}`);
}

function squarefeetToAcres(squarefeet) {
    const acres = squarefeet / 43560;
    return acres;
}

function calculateMowingTime(width, length, cutRatePerMinute) {
    const area = width * length;
    const minutes = area / cutRatePerMinute;
    return minutes;
}

export {hello, squarefeetToAcres, calculateMowingTime}