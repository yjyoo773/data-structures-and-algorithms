"use strict";

const Queue = require("../queue");

describe("QUEUE", () => {
  it("should instantiate an empty queue", () => {
    let queue = new Queue();
    expect(queue.length).toEqual(0);
    expect(queue.next).toEqual(null);
  });

  it("should successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue("test");
    expect(queue.length).toEqual(1);
    expect(queue.next).toEqual(0);
    expect(queue[queue.next]).toEqual("test");
  });

  it("should successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue("test1");
    queue.enqueue("test2");
    queue.enqueue("test3");
    expect(queue.length).toEqual(3);
    expect(queue.next).toEqual(0);
    expect(queue[queue.next]).toEqual("test1");
    expect(queue[queue.length - 1]).toEqual("test3");
  });

  it('should successfully dequeue out of a queue the expected value',()=>{
    let queue = new Queue();
    queue.enqueue("test");
    queue.dequeue()
    expect(queue.isEmpty()).toBeTruthy()
  })

  it('should successfully peek into a queue, seeing the expected value',()=>{
    let queue = new Queue();
    queue.enqueue("test1");
    queue.enqueue("test2");
    expect(queue.peek()).toEqual('test1')
  })

  it("should successfully empty a queue after multiple dequeues",()=>{
      let queue = new Queue();
      queue.enqueue("test1");
      queue.enqueue("test2");
      queue.dequeue()
      queue.dequeue()
      expect(queue.isEmpty()).toBeTruthy()
  })

  it("calling peek or dequeue on an empty queue should raise an exception",()=>{
      let q = new Queue()
      expect(q.peek()).toBeFalsy()
      expect(q.dequeue()).toBeFalsy()
  })
});
