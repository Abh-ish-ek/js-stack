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

class StackObj {
  constructor() {
    this.data=[];
  }
  push(data) {
    return this.data.push(data);
  }

  pop() {
    return this.data.pop();
  }
}

function get_stack() {
  return new StackObj();
}

module.exports.get_stack = get_stack;

