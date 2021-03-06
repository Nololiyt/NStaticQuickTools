import { Base64 } from 'js-base64';
import jsQR from "jsqr";
function getInput(name: string): HTMLInputElement {
    return document.getElementById(name) as HTMLInputElement;
}
function theFunction() {
    document.getElementById("output").innerHTML = "";
    let file = getInput("input").files[0];
    if (window.FileReader) {
        let fr = new FileReader();
        fr.onloadend = base64ToqR;
        fr.readAsDataURL(file);
    }
}

function base64ToqR(data: ProgressEvent<FileReader>) {
    let img = new Image();
    img.src = data.target.result as string;
    img.onload = function () {
        let canvas = document.createElement("canvas") as HTMLCanvasElement;
        canvas.hidden = true;
        canvas.width = img.width;
        canvas.height = img.height;

        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        let imageData = ctx.getImageData(0, 0, img.width, img.height);

        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
            let ed = new Uint8Array(code.binaryData);
            document.getElementById("output").innerHTML = Base64.fromUint8Array(ed);
        }
        document.removeChild(canvas);
    };
}
document.getElementById('input').onchange = theFunction;