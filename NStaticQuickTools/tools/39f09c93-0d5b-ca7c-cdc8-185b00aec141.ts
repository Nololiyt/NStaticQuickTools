import { Base64 } from 'js-base64';
import { StringJointer } from 'string-jointer';

function getInput(name: string): HTMLInputElement {
    return document.getElementById(name) as HTMLInputElement;
}

function* numbersToStrings(numbers: Iterable<number>) {
    for (let number of numbers)
        yield number.toString();
}
function toByteArray() {
    let base64 = getInput("input1").value;
    let uintArray = Base64.toUint8Array(base64);
    getInput("input2").value = new StringJointer(", ", "[", "]").addMany(
        numbersToStrings(uintArray)
    ).toString();
}

function toBase64() {
    let byteArray = new Uint8Array(eval((getInput("input2").value)));
    getInput("input1").value = Base64.fromUint8Array(byteArray);
}

document.getElementById('input1Button').onclick = toByteArray;
document.getElementById('input2Button').onclick = toBase64;