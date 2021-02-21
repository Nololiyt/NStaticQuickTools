import { Base64 } from 'js-base64';

function getInput(name: string): HTMLInputElement {
    return document.getElementById(name) as HTMLInputElement;
}

function toByteArray() {
    var base64 = getInput("input1").value;
    var uintArray = Base64.toUint8Array(base64);
    var result = "[";
    for (var i = 0; i < uintArray.length; i++) {
        result += uintArray[i];
        result += ", "
    }
    result = result.substring(0, result.length - 2);
    result += "]"
    getInput("input2").value = result;
}

function toBase64() {
    var byteArray = new Uint8Array(eval((getInput("input2").value)));
    getInput("input1").value = Base64.fromUint8Array(byteArray);
}

document.getElementById('input1Button').onclick = toByteArray;
document.getElementById('input2Button').onclick = toBase64;