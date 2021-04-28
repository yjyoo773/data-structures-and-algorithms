"use strict";

const ll = require("../../linked-list/lib/linked-list");

function zipLists(l1, l2) {
  if (l1.head === null) return l2;
  if (l2.head === null) return l1;

  let cur = l1.head;
  let dummy = new ll();
  dummy.head = cur;
  let h1 = l1.head;
  let h2 = l2.head;

  while (h1 && h2) {
    h1 = h1.next;
    cur.next = h2;
    h2 = h2.next;
    cur = cur.next;
    cur.next = h1;
    cur = cur.next;
  }

  return dummy;
}
module.exports = zipLists