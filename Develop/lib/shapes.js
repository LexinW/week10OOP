
class Shape {
    constructor(color) {
        this.color = color;
        this.elements = [];
    }

    render() {
        return `
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                ${this.elements.join('\n')}
            </svg>
        `;
    }


    drawText(text, textColor) {
        const width = 200;
        const height = 200;
        const centerX = width / 2;
        const centerY = height / 2;

        const textElement = `
            <text x="${centerX}" y="${centerY}" fill="${textColor}" font-size="24" font-family="Arial" text-anchor="middle" dy=".3em">
                ${text}
            </text>
        `;
        this.elements.push(textElement);
    }
}

class Circle extends Shape {
    draw() {
        const width = 200;
        const height = 200;
        const centerX = width / 2;
        const centerY = height / 2;

        const circleElement = `
            <circle cx="${centerX}" cy="${centerY}" r="${width / 2}" fill="${this.color}" />
        `;
        this.elements.push(circleElement);
    }
}

class Square extends Shape {
    draw() {
        const width = 200;
        const height = 200;

        const squareElement = `
            <rect x="0" y="0" width="${width}" height="${height}" fill="${this.color}" />
        `;
        this.elements.push(squareElement);
    }
}

class Triangle extends Shape {
    draw() {
        const width = 200;
        const height = 200;

        const triangleElement = `
            <polygon points="0,${height} ${width},${height} ${width / 2},0" fill="${this.color}" />
        `;
        this.elements.push(triangleElement);
    }
}

module.exports = { Triangle, Circle, Square };