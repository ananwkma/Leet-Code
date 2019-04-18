// You run an e-commerce website and want to record the last N order ids in a log. 
// Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log

// get_last(i): gets the ith last element from the log. 
// i is guaranteed to be smaller than or equal to N.

// You should be as efficient with time and space as possible.

class Orders {
  constructor () {
    this.log = [];
  }

  record(order_id) {
    this.log.push(order_id);
  };

  get_last(i){
    return this.log[this.log.length-1-i];
  };
}

const getRecentOrders = (orders, N) => {
  let res = [];
  for (let i = 0; i < N; i++) {
    res.push(orders.get_last(i));
  }
  return res;
}

let o = new Orders();
o.record(1);
o.record(2);
o.record(3);
o.record(4);
o.record(5);
console.log(o);

console.log(getRecentOrders(o, 3));