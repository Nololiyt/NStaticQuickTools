import { StringJointer } from 'string-jointer';

function getInput(name: string): HTMLInputElement {
    return document.getElementById(name) as HTMLInputElement;
}

function theFunction() {
    let input1 = getInput("input1");
    let input2 = getInput("input2");
    let input3 = getInput("input3");

    let min = parseInt(input1.value);
    let max = parseInt(input2.value);
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }
    if (min == max) {
        max = max + 1;
    }
    let count = parseInt(input3.value);

    let jointer = new StringJointer(", ", "[", "]");
    for (let i = 0; i < count; i++) {
        let val = Math.floor(Math.random() * (max - min)) + min;
        jointer.add(val.toString());
    }

    input1.value = min.toString();
    input2.value = max.toString();
    input3.value = count.toString();

    document.getElementById("output").innerHTML = jointer.toString();
}
document.getElementById('inputButton').onclick = theFunction;
theFunction();