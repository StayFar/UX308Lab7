import {hello, squarefeetToAcres, calculateMowingTime, getAirQualityDescription, yee_ha, calculateSlope} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
<h2>results</h2>
<p>squarefeetToAcres(43560)== "{squarefeetToAcres(43560)}"</p>
<p>squarefeetToAcres(87120) == "{squarefeetToAcres(87120)}"</p>
<p>squarefeetToAcres(10000) == "{squarefeetToAcres(10000)}"</p>
    </section>;
}

function Question3(){
    return <section>
3. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
<h2>results</h2>
<p>calculateMowingTime(10, 20, 5)== "{calculateMowingTime(10, 20, 5)}"</p>
<p>calculateMowingTime(15, 30, 10)== "{calculateMowingTime(15, 30, 10)}"</p>
<p>calculateMowingTime(8, 12, 6)== "{calculateMowingTime(8, 12, 6)}"</p>
    </section>;
}

function Question4(){
    return <section>
4. Compute the air quality given an air quality index:

- "Good" - 0 to 50 AQI
- "Moderate" - 51 - 100 AQI
- "Unhealthy for Sensitive Groups" - 101 - 150 AQI
- "Unhealthy" - 151 - 200 AQI
- "Very Unhealthy" - 201 - 300 AQI
- "Hazardous" - 300+ AQI
<h2>results</h2>
<p>getAirQualityDescription(42)== "{getAirQualityDescription(42)}"</p>
<p>getAirQualityDescription(85)== "{getAirQualityDescription(85)}"</p>
<p>getAirQualityDescription(110)== "{getAirQualityDescription(110)}"</p>
<p>getAirQualityDescription(175)== "{getAirQualityDescription(175)}"</p>
<p>getAirQualityDescription(250)== "{getAirQualityDescription(250)}"</p>
<p>getAirQualityDescription(320)== "{getAirQualityDescription(320)}"</p>
    </section>;
}

function Question5(){
    return <section>
5. yee_ha takes an integer parameter and returns one of the following strings:

- "Yee" if number is evenly divisible by 3
- "Ha" if number is evenly divisible by 7
- "Yee Ha" if number is evenly divisible by both 3 and 7
- "Nada" if number is none of the above
<h2>results</h2>
<p>yee_ha(21)== "{yee_ha(21)}"</p>
<p>yee_ha(9)== "{yee_ha(9)}"</p>
<p>yee_ha(14)== "{yee_ha(14)}"</p>
<p>yee_ha(10)== "{yee_ha(10)}"</p>
    </section>;
}

function Question6(){
    return <section>
6. Calculate the slope of a line.

- Slope is calculated as rise / run, where rise is distance between y coordinates, and run is distance between x coordinates.

  Test at least 3 lines.
<h2>results</h2>
<p>calculateSlope(0, 0, 4, 4)== "{calculateSlope(0, 0, 4, 4)}"</p>
<p>calculateSlope(1, 2, 3, 6)== "{calculateSlope(1, 2, 3, 6)}"</p>
<p>calculateSlope(2, 5, 2, 10)== "{calculateSlope(2, 5, 2, 10)}"</p>
    </section>
}

export {Question1, Question2, Question3, Question4, Question5, Question6}