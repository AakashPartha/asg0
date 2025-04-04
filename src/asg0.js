// asg0.js
function main() {  
    var canvas = document.getElementById('example');  
    if (!canvas) return false;

    var ctx = canvas.getContext('2d');
    window.canvasContext = ctx;

    clearCanvas();
    handleDrawEvent();
}

function clearCanvas() {
    let ctx = window.canvasContext;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);
}

function drawVector(v, color) {
    let ctx = window.canvasContext;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
}

function handleDrawEvent() {
    clearCanvas();
    let v1 = new Vector3([
        parseFloat(document.getElementById("v1x").value),
        parseFloat(document.getElementById("v1y").value),
        0
    ]);
    let v2 = new Vector3([
        parseFloat(document.getElementById("v2x").value),
        parseFloat(document.getElementById("v2y").value),
        0
    ]);
    drawVector(v1, "red");
    drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
    clearCanvas();
    let v1 = new Vector3([
        parseFloat(document.getElementById("v1x").value),
        parseFloat(document.getElementById("v1y").value),
        0
    ]);
    let v2 = new Vector3([
        parseFloat(document.getElementById("v2x").value),
        parseFloat(document.getElementById("v2y").value),
        0
    ]);
    drawVector(v1, "red");
    drawVector(v2, "blue");

    let op = document.getElementById("operation").value;
    let scalar = parseFloat(document.getElementById("scalar").value);

    if (op === "add") {
        let v3 = new Vector3(v1.elements).add(v2);
        drawVector(v3, "green");
    } else if (op === "sub") {
        let v3 = new Vector3(v1.elements).sub(v2);
        drawVector(v3, "green");
    } else if (op === "mul") {
        let v3 = new Vector3(v1.elements).mul(scalar);
        let v4 = new Vector3(v2.elements).mul(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op === "div") {
        let v3 = new Vector3(v1.elements).div(scalar);
        let v4 = new Vector3(v2.elements).div(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op === "magnitude") {
        console.log("v1 magnitude:", v1.magnitude());
        console.log("v2 magnitude:", v2.magnitude());
    } else if (op === "normalize") {
        let norm1 = new Vector3(v1.elements).normalize();
        let norm2 = new Vector3(v2.elements).normalize();
        drawVector(norm1, "green");
        drawVector(norm2, "green");
    } else if (op === "angle") {
        angleBetween(v1, v2);
    } else if (op === "area") {
        areaTriangle(v1, v2);
    }
}

function angleBetween(v1, v2) {
    let dot = Vector3.dot(v1, v2);
    let angleRad = Math.acos(dot / (v1.magnitude() * v2.magnitude()));
    let angleDeg = angleRad * (180 / Math.PI);
    console.log("Angle between v1 and v2:", angleDeg, "degrees");
}

function areaTriangle(v1, v2) {
    let cross = Vector3.cross(v1, v2);
    let area = cross.magnitude() / 2;
    console.log("Area of triangle:", area);
}
