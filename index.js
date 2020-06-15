// My module
// function stackObj(x) {
//   data: [], (this.data = x);
// }

// stackObj.prototype.push = function pushData() {
//   return this.data.push(this.data);
// };
// stackObj.prototype.pop = function popData() {
//   return this.data.pop();
// };

class stackObj {
  constructor(input) {
    data: [], (this.input = input);
  }
  push() {
    return this.data.push(x);
  }

  pop() {
    return this.data.pop();
  }
}

module.exports = stackObj;

// stackObj = {
//   data: [],
//   push: function (x) {
//     return this.data.push(x);
//   },

//   pop: function () {
//     return this.data.pop();
//   },
// };
// // module.exports['stkObj'] = stkObj;
