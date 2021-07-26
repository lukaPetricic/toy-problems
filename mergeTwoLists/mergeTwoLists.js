/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var ListNode = function(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let result = null;
  let tail = null;

  while (l1 && l2) {
    var higher;
    if (l1.val < l2.val) {
      higher = l1.val;
      l1 = l1.next;
    } else {
      higher = l2.val;
      l2 = l2.next;
    }

    if (result) {
      tail.next = new ListNode(higher);
      tail = tail.next;
    } else {
      result = new ListNode(higher);
      tail = result;
    }
  }

  if (!l1) {
    tail.next = l2;
  } else {
    tail.next = l1;
  }

  return result;
};

// let first = new ListNode(2);
// first.next = new ListNode(4);
// first.next.next = new ListNode(7);

// let second = new ListNode(5);
// second.next = new ListNode(6);
// second.next.next = new ListNode(4);

// let first = null;
// let second = null;

// let result = mergeTwoLists(first, second);
// console.log(result);