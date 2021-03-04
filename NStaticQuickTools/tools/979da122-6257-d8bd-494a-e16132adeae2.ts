import { Base64 } from 'js-base64';

function getInput(name: string): HTMLInputElement {
    return document.getElementById(name) as HTMLInputElement;
}

function toFile() {
    let base64String = getInput("input1").value;
    let blob = new Blob([Base64.toUint8Array(base64String)], {
        type: "application/octet-stream"
    });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "add its extension behind");
    a.setAttribute("target", "_blank");
    let clickEvent = document.createEvent("MouseEvents");
    clickEvent.initEvent("click", true, true);
    a.dispatchEvent(clickEvent);
}

function toBase64() {
    let file = getInput("input2").files[0];
    let reader = new FileReader();
    reader.onload = function (ev) {
        getInput("input1").value =
            Base64.fromUint8Array(new Uint8Array(ev.target.result as ArrayBuffer));
    }
    reader.readAsArrayBuffer(file);
}
document.getElementById('input1Button').onclick = toFile;
document.getElementById('input2').onchange = toBase64;