import { v4 as uuidv4 } from 'uuid';

function theFunction() {
    let result = "\"" + uuidv4() + "\"";
    document.getElementById('output').innerHTML = result;
}

document.getElementById("input").onclick = theFunction;
theFunction();