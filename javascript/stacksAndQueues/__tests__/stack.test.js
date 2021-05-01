"use strict";

const Stack = require("../stack");

describe("STACK", () => {
  it("should instantiate an empty stack", () => {
    let stack = new Stack();
    expect(stack.length).toEqual(0);
  });

  it("should successfully push into a stack", () => {
    let stack = new Stack();
    stack.push("test");
    expect(stack.length).toEqual(1);
    expect(stack[stack.length-1]).toEqual('test')
  });

  it("should successfully push multiple values into a stack", () => {
    let stack = new Stack();
    stack.push("test1");
    stack.push("test2");
    stack.push("test3");
    expect(stack.length).toEqual(3);
    expect(stack[stack.length-1]).toEqual("test3");
  });

  it('should successfully pop out of a stack the expected value',()=>{
    let stack = new Stack();
    stack.push("test");
    stack.pop()
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('should successfully peek into a stack, seeing the expected value',()=>{
    let stack = new Stack();
    stack.push("test1");
    stack.push("test2");
    expect(stack.peek()).toEqual('test2')
  })

  it("should successfully empty a stack after multiple pops",()=>{
      let stack = new Stack();
      stack.push("test1");
      stack.push("test2");
      stack.pop()
      stack.pop()
      expect(stack.isEmpty()).toBeTruthy()
  })

  it("calling peek or pop on an empty stack should raise an exception",()=>{
      let q = new Stack()
      expect(q.peek()).toBeFalsy()
      expect(q.pop()).toBeFalsy()
  })
});
