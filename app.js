#!/usr/bin/env node

/**
 * Pasar argumentos de forma nativa node
 * node app.js name=joe
 */

// const args = process.argv.slice(2);

// args.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });


/**
 * Requiere el npm install minimist
 * Pasar argumentos con minimist tipo 
 * node app.js --name=joe
 */
// const args = require('minimist')(process.argv.slice(2));

// console.log(args.name)





/**
 * Formateo de cadenas
 *  %s format a variable as a string
 *  %d format a variable as a number
 *  %i format a variable as its integer part only
 *  %o format a variable as an object
 */

// console.log('My %s has %d ears', 'cat', 2);






/**
 * Midiendo el tiempo de ejecución
 */

// const doSomething = () => console.log('test');

// const measureDoingSomething = () => {

//     console.time('doSomething()');
//     doSomething();
//     console.timeEnd('doSomething()');

// };

// measureDoingSomething();





/**
 * Colorines con npm install chalk@4
 */

// const chalk = require('chalk');
// console.log(chalk.bgYellow('hi!'));





/**
 * Progress bar con npm install progress
 */
// const ProgressBar = require('progress');

// const bar = new ProgressBar(':bar', { total: 20 });
// const timer = setInterval(() => {
//     bar.tick();
//     if (bar.complete) {
//         clearInterval(timer);
//     }
// }, 100);





/**
 * Pompt con npm install inquirer@7
 */
// const inquirer = require('inquirer');

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "¿Cómo te llama?",
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });


/**
 * Raw List prompt example
 */

//import inquirer from '../lib/inquirer.js';
const inquirer = require('inquirer');

// inquirer.prompt([
//     {
//         type: 'rawlist',
//         name: 'paso1',
//         message: '¿QUé hacemos?',
//         choices: [
//             'Crear una factura',
//             'Ver listado de clientes',
//         ],
//     },
//     {
//         type: 'rawlist',
//         name: 'size',
//         message: 'What size do you need',
//         choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
//         filter(val) {
//             return val.toLowerCase();
//         },
//     },
// ])

// .then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//     }
// );

const questions = [
    {
      type: 'confirm',
      name: 'bacon',
      message: 'Do you like bacon?',
    },
    {
      type: 'input',
      name: 'favorite',
      message: 'Bacon lover, what is your favorite type of bacon?',
      when(answers) {
        return answers.bacon;
      },
    },
    {
      type: 'confirm',
      name: 'pizza',
      message: 'Ok... Do you like pizza?',
      when(answers) {
        return !likesFood('bacon')(answers);
      },
    },
    {
      type: 'input',
      name: 'favorite',
      message: 'Whew! What is your favorite type of pizza?',
      when: likesFood('pizza'),
    },
  ];
  
  function likesFood(aFood) {
    return function (answers) {
      return answers[aFood];
    };
  }
  
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });