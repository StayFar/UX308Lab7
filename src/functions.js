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

function getAirQualityDescription(aqi) {
    if (aqi >= 0 && aqi <= 50) {
        return "Good";
    } else if (aqi <= 100) {
        return "Moderate";
    } else if (aqi <= 150) {
        return "Unhealthy for Sensitive Groups";
    } else if (aqi <= 200) {
        return "Unhealthy";
    } else if (aqi <= 300) {
        return "Very Unhealthy";
    } else {
        return "Hazardous";
    }
}

function yee_ha(number) {
    if (number % 3 === 0 && number % 7 === 0) {
        return "Yee Ha";
    } else if (number % 3 === 0) {
        return "Yee";
    } else if (number % 7 === 0) {
        return "Ha";
    } else {
        return "Nada";
    }
}

function calculateSlope(x1, y1, x2, y2) {
    const rise = y2 - y1;
    const run = x2 - x1;

    if (run === 0) {
        return "Undefined (vertical line)";
    }

    return rise / run;
}

export {hello, squarefeetToAcres, calculateMowingTime, getAirQualityDescription, yee_ha, calculateSlope}