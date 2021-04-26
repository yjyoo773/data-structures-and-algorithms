"use strict";

// const linkedList = require("../index");
// Require our linked list implementation
const LinkedList = require("../lib/linked-list");

describe("Linked List", () => {
  it("Should successfully instantiate an empty linked list", () => {
    var linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });

  it("Should properly insert into the linked list", () => {
    var linkedList = new LinkedList();
    linkedList.insert("test node");
    expect(linkedList.head.val).toEqual("test node");
    expect(linkedList.head.next).toBeNull();
  });

  it("The head property will properly point to the first node in the linked list", () => {
    var linkedList = new LinkedList();
    linkedList.insert("test node");
    expect(linkedList.head.val).toEqual("test node");
    expect(linkedList.head.next).toBeNull();
  });

  it("Should properly insert multiple nodes into the linked list", () => {
    var linkedList = new LinkedList();
    linkedList.insert("test node1");
    linkedList.insert("test node2");
    expect(linkedList.head.val).toEqual("test node2");
    expect(linkedList.head.next).toEqual({ next: null, val: "test node1" });
  });

  it("Should return true when finding a value within the linked list that exists", () => {
    var linkedList = new LinkedList();
    linkedList.insert("test node1");
    linkedList.insert("test node2");

    expect(linkedList.includes("test node1")).toBeTruthy();
  });

  it("Should return false when finding any value for empty linked list", () => {
    var linkedList = new LinkedList();

    expect(linkedList.includes("test node1")).toBeFalsy();
  });

  it("Should return false when searching for a value in the linked list that does not exist", () => {
    var linkedList = new LinkedList();
    linkedList.insert("test node1");
    linkedList.insert("test node2");

    expect(linkedList.includes("test node999")).toBeFalsy();
  });

  it("Should properly return a collection of all the values that exist in the linked list", () => {
    var linkedList = new LinkedList();
    let expected = "{test node1} -> {test node2} -> NULL";
    linkedList.append("test node1");
    linkedList.append("test node2");
    expect(linkedList.toString()).toEqual(expected);
  });

  it("Should return NULL when stringifying an empty linked list", () => {
    var linkedList = new LinkedList();
    let expected = "NULL";
    expect(linkedList.toString()).toEqual(expected);
  });

  it("Should  successfully insert a node before a node located i the middle of a linked list", () => {
    var ll = new LinkedList();
    ll.append("test node1");
    ll.append("test node2");
    ll.append("test node4");
    ll.insertBefore("test node4", "test node3");
    let expected =
      "{test node1} -> {test node2} -> {test node3} -> {test node4} -> NULL";
    expect(ll.toString()).toEqual(expected);
  });

  it("Should successfully insert after a node in the middle of the linked list", () => {
    var ll = new LinkedList();
    ll.append("test node1");
    ll.append("test node2");
    ll.append("test node4");
    ll.insertAfter("test node2", "test node3");
    let expected =
      "{test node1} -> {test node2} -> {test node3} -> {test node4} -> NULL";
    expect(ll.toString()).toEqual(expected);
  });
});
