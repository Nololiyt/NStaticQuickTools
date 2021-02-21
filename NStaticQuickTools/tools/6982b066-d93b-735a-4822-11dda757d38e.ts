
import { Base64 } from 'js-base64';
import $ from "jquery";
import jsQR from "jsqr";
function getInput(name: string): HTMLInputElement {
    return document.getElementById(name) as HTMLInputElement;
}
function theFunction() {
    document.getElementById("output").innerHTML = "[]";
    var file = getInput("input").files[0];
    if (window.FileReader) {
        var fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onloadend = function (e) {
            var base64Data = e.target.result;
            base64ToqR(base64Data)
        }
    }
}

function base64ToqR(data) {
    var c = document.getElementById("qrcanvas") as HTMLCanvasElement;
    var ctx = c.getContext("2d");

    var img = new Image();
    img.src = data;
    img.onload = function () {
        $("#qrcanvas").attr("width", img.width)
        $("#qrcanvas").attr("height", img.height)
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var imageData = ctx.getImageData(0, 0, img.width, img.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
            var ed = new Uint8Array(code.binaryData);
            document.getElementById("output").innerHTML = Base64.fromUint8Array(ed);
        }
    };
}
document.getElementById('input').onchange = theFunction;