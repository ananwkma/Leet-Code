// You run an e-commerce website and want to record the last N order ids in a log. 
// Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log

// get_last(i): gets the ith last element from the log. 
// i is guaranteed to be smaller than or equal to N.

// You should be as efficient with time and space as possible.

class Orders {
  constructor (N) {
    this.log = [];
    this.limit = N;
  }

  record(order_id) {
    this.log.push(order_id);
    if (this.log.length > this.limit) this.log.shift();
  };

  getRecent() {
    return this.log;
  }
}

let o = new Orders(3);
o.record(1);
o.record(2);
o.record(3);
o.record(4);
o.record(5);
console.log(o.getRecent());