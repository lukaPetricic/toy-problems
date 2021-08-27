/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
    let prev = null;
    let current = head;
    let next = head.next;

    while (current.next) {
        current.next = prev;
        prev = current;
        current = next;
        next = next.next;
    }

    current.next = prev;

    return current;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let head = new ListNode(1);
head.next = new ListNode(5);
head.next.next = new ListNode(9);

console.log(head);
console.log(reverseList(head))