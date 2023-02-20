const printer = {};printer.on = true;printer.mode = "black and white";printer['remainingSheets'] = 500; // add remainingSheets propertyprinter.print = function () { // print method    console.log("printing");}delete printer.on; // delete the on propertyconsole.log(printer.on, 'delete on'); // undefined// developer objectsconst developer = {    name: 'Yousef',    sayHello: function () { // sayHello method        console.log('Hello, my name is ' + this.name);    }};developer.sayHello(); // Hello, my name is Yousefdeveloper['sayHello'](); // Hello, my name is Yousef// developer objects ()const developerObjects = {    name: 'Andrew',    sayHello: function () {        console.log('Hi there!');    },    favoriteLanguage: function (language) {        console.log(`Hello , my names is : ${language}`);    }};developerObjects.favoriteLanguage('Yousef'); // Hello , my names is : YousefdeveloperObjects['favoriteLanguage']('Yousef'); // Hello , my names is : Yousefconst chameleon = {    eyes: 2,    lookAround: function () {        console.log(`I see you with my ${this.eyes} eyes!`);    }};chameleon.lookAround(); // I see you with my 2 eyes!const car = {    numberOfDoors: 4,    drive: function () {        console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);    }};const letsRoll = car.drive;letsRoll(); // Get in one of the undefined doors, and let's go!var iceCreamEaten = 1;function consume(numberOfGallons) {    var result = iceCreamEaten + numberOfGallons;    function updateTotals(newTotal) {        iceCreamEaten = result;        console.log(`You have eaten ${iceCreamEaten} gallons of ice cream!`);    }    updateTotals();}consume(3); // iceCreamEaten = 4const dictionary = {    car: 'automobile',    apple: 'healthy snack',    cat: 'cute furry animal',    dog: 'best friend'};console.log(Object.keys(dictionary)); // ['car', 'apple', 'cat', 'dog']console.log(Object.values(dictionary)); // ['automobile', 'healthy snack', 'cute furry animal', 'best friend']const myFunction = function (n1, n2) {    return n1 * n2;};console.log(myFunction(2, 3)); // 6console.log(myFunction.name); // 6function alertThenReturn() {    console.log('Message 1!');    return function () {        console.log('Message 2!');    };}const innerFunction = alertThenReturn();innerFunction(); // Message 1! Message 2!const higherOrderFunction = function () {    return function () {        console.log('8');    }}// higherOrderFunction()(); // 8let HOF = higherOrderFunction();HOF(); // 8//Array.forEach ----------------------------------------------------/*[1, 5, 2, 4, 6, 3,9].forEach(function logIfOdd(n) {    if (n % 2 !== 0) {        console.log(n);    }});*/[1, 5, 2, 4, 6, 3,9].forEach((n) => n % 2 !== 0 ? console.log(n) : null); // 1 5 3 9//Array.map ----------------------------------------------------const names = ['David', 'Richard', 'Veronika'];const nameLengths = names.map(function(name) {    return name.length;});//Array.filter ----------------------------------------------------const names2 = ['David', 'Richard', 'Veronika'];const shortNames = names2.filter(function(name) {    return  name.length < 6;});console.log(shortNames); // ['David', 'Richard']//scopelet n = 8;function functionOne() {    let n = 9;    function functionTwo() {        let n = 10;        console.log(n);  // First log    }    functionTwo();    console.log(n);  // Second log}functionOne();console.log(n);  // Third log// 10 9 8//closurefunction remember(number) {    return function() {        return number;    }}const returnedFunction = remember(5);console.log( returnedFunction() );// 5function outerFunction() {    let num1 = 5;    return function(num2) {        console.log(num1 + num2);    };}let result = outerFunction();result(10);/*Declare a function named `expandArray()` that:    * Takes no arguments* Contains a single local variable, `myArray`, which points to [1, 1, 1]* Returns an anonymous function that directly modifies `myArray` byappending another `1` into it* The returned function then returns the value of `myArray`*/function expandArray() {    let myArray = [1, 1, 1];    return function () {        myArray.push(1);        return myArray;    };}