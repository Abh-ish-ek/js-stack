const { stackObj } = require('./index');
const testPush = function (res) {
  try {
    stackObj.push(5);
    stackObj.push('Abhishek');
    stackObj.push(5);
    stackObj.pop(5);
    stackObj.log(person);
  } catch (err) {}
};

testPush();
