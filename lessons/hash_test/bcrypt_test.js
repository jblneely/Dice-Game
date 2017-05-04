var bcrypt = require('bcrypt');
var password = 'test';
var wrongPassword = 'nope';

// Test out hashing the password initially
console.log('Test out hashing the password initially');

var hash = bcrypt.hashSync(password, 10);
console.log('Value after hashSync is called:');
console.log(hash);
console.log('--------------------------------');
console.log();

// Test comparing the hashed password to the correct password
console.log('Test comparing the hashed CORRECT password to the correct password');

var isValid = bcrypt.compareSync(password, hash);
console.log('Password is valid?', isValid.toString());
console.log('---------------------------------');
console.log();

// Test comparing the wrong password to the hashed password
console.log('Test comparing the hashed WRONG password to the correct password');

var isValid2 = bcrypt.compareSync(wrongPassword, hash);
console.log('Password is valid?', isValid2.toString());
console.log('---------------------------------');
console.log();
