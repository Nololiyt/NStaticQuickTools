function getInput(name: string): HTMLInputElement {
    return document.getElementById(name) as HTMLInputElement;
}

function theFunction() {
    var input1 = getInput("input1");
    var input2 = getInput("input2");
    var input3 = getInput("input3");

    var min = parseInt(input1.value);
    var max = parseInt(input2.value);
    if (min > max) {
        var temp = max;
        max = min;
        min = temp;
    }
    if (min == max) {
        max = max + 1;
    }
    var count = parseInt(input3.value);
    var result = "[";
    for (var i = 0; i < count; i++) {
        result += Math.floor(Math.random() * (max - min)) + min;
        result += ", ";
    }
    result = result.substring(0, result.length - 2);
    result += "]";
    input1.value = min.toString();
    input2.value = max.toString();
    input3.value = count.toString();
    document.getElementById("output").innerHTML = result;
}
document.getElementById('inputButton').onclick = theFunction;
theFunction();