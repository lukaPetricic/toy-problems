// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }



let ListNode = function (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}



let addTwoNumbers = function (l1, l2) {
  let result = null;
  let current = null;
  let hold = 0;

  while (l1 || l2 || hold) {
    let firstNum = l1 ? l1.val : 0;
    let secondNum = l2 ? l2.val : 0;

    let currentSum = firstNum + secondNum + hold;
    hold = currentSum > 9 ? 1 : 0;

    if (hold) currentSum -= 10;

    if (result) {
      current.next = new ListNode(currentSum);
      current = current.next;
    } else {
      result = new ListNode(currentSum);
      current = result;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return result;
};

// let firstNum = new ListNode(2);
// firstNum.next = new ListNode(4);
// firstNum.next.next = new ListNode(3);

// let secondNum = new ListNode(5);
// secondNum.next = new ListNode(6);
// secondNum.next.next = new ListNode(4);

// let result = addTwoNumbers(firstNum, secondNum);
// console.log(result);