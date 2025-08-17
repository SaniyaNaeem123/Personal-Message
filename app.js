"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Personal message: store a name in a variable, and print a message to that person.
//Your message shuold be simple, such as "hello world" , would you like to to learn some python today?  
var personName = 'Eric';
personName = prompt('What is your name?') || '';
if (personName !== null && personName !== '') {
    alert('Hello ${personName}, Would you like to learn some Python today?');
}
else {
    alert('You have to fill your name!');
}
