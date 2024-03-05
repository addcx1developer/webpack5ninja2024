const { add: addNumbers, subtract } = require('./functions');

function add() {
	console.log('Hello');
}

const output = addNumbers(1, 2);
add();

console.log(output);
