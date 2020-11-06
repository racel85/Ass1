'use strict';

const c2f = function () {
    let fahr;
    let celsius;

    let lower = 0;
    let upper = 300;
    let step = 20;

    let s = '<table>';
    s += '<tr><th>Celsius</th><th>Fahrenheit</th></tr>';
    celsius = lower;
    while (celsius <= upper) {
        fahr = celsius * 9 / 5 + 32;   // conversion
        s += `<tr><td>${celsius}</td><td>${fahr}</td></tr>`;
        celsius = celsius + step;
    }
    s += '</table>';
    return s;
}

window.AddEventListener("load", c2f);
