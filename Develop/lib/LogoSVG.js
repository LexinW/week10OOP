const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const {Circle, Triangle, Square} = require('./shapes');

class LogoSVG {
  constructor() {
    this.color = '';
    this.shape = null;
    this.text = '';
    this.textColor = '';
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'color',
          message: 'Choose a COLOR for your logo',
          choices: ['red', 'blue', 'green', 'yellow'],
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a SHAPE for your logo',
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'text',
          message: 'Enter TEXT for logo: ',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter TEXT COLOR for logo: ',
          deafult: 'white',
        },
      ])
      .then(answers  => {
        this.color = answers.color;
        this.text = answers.text;
        this.textColor = answers.textColor;

        switch (answers.shape) {
          case 'Circle':
            this.shape = new Circle(this.color);
            break;
          case 'Triangle':
            this.shape = new Triangle(this.color);
            break;
          case 'Square':
            this.shape = new Square(this.color);
            break;
        }
        this.shape.draw();
        this.shape.drawText(this.text, this.textColor);
        return this.generateSVG();
      })
      .then(svgContent => {
        return writeFile(
          join(__dirname, '..', 'output', 'logo.svg'),
          svgContent
        );
      })
      .then(() => console.log('Created logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
  generateSVG() {
    return Promise.resolve(this.shape.render());
  }
}
module.exports = LogoSVG;
