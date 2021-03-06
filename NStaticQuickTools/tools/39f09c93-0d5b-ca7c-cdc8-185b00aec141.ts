import { Base64 } from 'js-base64';
import { StringJointer } from 'string-jointer';

function getInput(name: string): HTMLInputElement {
    return document.getElementById(name) as HTMLInputElement;
}

function toByteArray() {
    let base64 = getInput("input1").value;
    let uintArray = Base64.toUint8Array(base64);

    getInput("input1").value = Base64.fromUint8Array(uintArray);
    getInput("input2").value = new StringJointer(", ", "[", "]").addMany(
        Array.from(uintArray, x => x.toString())
    ).toString();
}

function toBase64() {
    let strings = getInput("input2").value
        .split(new RegExp("\\D+"))
        .filter((x) => x != "");
    let byteArray = Uint8Array.from(strings, x => Number.parseInt(x));

    getInput("input2").value = new StringJointer(", ", "[", "]").addMany(
        Array.from(byteArray, x => x.toString())
    ).toString();
    getInput("input1").value = Base64.fromUint8Array(byteArray);
}

document.getElementById('input1Button').onclick = toByteArray;
document.getElementById('input2Button').onclick = toBase64;