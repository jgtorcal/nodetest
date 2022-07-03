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
        type: 'rawlist',
        name: 'qintro',
        message: '¿Qué hacemos?',
        choices: [
            'Crear una factura',
            'Gestionar clientes',
            'Salir',
        ],
    },
    {
        type: 'input',
        name: 'qnum',
        message: 'Dime el número de la fatcura',
        when(answers) {
            return answers.qintro == "Crear una factura";
        },
    },
    {
        type: 'confirm',
        name: 'salir',
        message: '¿Quieres salir?',
        when(answers) {
            return answers.salir;
            
        },
    },
    {
        type: 'input',
        name: 'qfecha',
        message: 'Dime una fecha',
    },
    {
        type: 'input',
        name: 'qfecha',
        message: 'Dime una fecha de vencimiento',
    },
    {
        type: 'input',
        name: 'qconcepto_name',
        message: 'Dime el concepto',
    },
    {
        type: 'input',
        name: 'qconcepto_cost',
        message: 'Dime el coste',
    },
    {
        type: 'input',
        name: 'qconcepto_quantity',
        message: 'Dime la cantidad',
    },
    {
        type: 'confirm',
        name: 'otro_concepto',
        message: '¿Añadir otro concepto?',
    },
    {
        type: 'confirm',
        name: 'print',
        message: '¿Imprimir?',
        when(answers) {
            return !answers.otro_concepto;
            console.log("Imprimiendo fatcura")
        },
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});