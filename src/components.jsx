import {hello, squarefeetToAcres, calculateMowingTime} from './functions.js';

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
    </section>
}

function Question3(){
    return <section>
3. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
<h2>results</h2>
<p>calculateMowingTime(10, 20, 5)== "{calculateMowingTime(10, 20, 5)}"</p>
<p>calculateMowingTime(15, 30, 10)== "{calculateMowingTime(15, 30, 10)}"</p>
<p>calculateMowingTime(8, 12, 6)== "{calculateMowingTime(8, 12, 6)}"</p>
    </section>
}

export {Question1, Question2, Question3}