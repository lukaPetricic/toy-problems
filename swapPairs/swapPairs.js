/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function swapPairs(head) {
    if (head === null)
        return null;
    var pairOne = head;
    var pairTwo = head.next;
    var next = pairTwo ? pairTwo.next : null;
    var newHead = pairTwo ? pairTwo : head;
    while (pairOne && pairTwo) {
        pairOne.next = next;
        pairTwo.next = pairOne;
        console.log(newHead);
        pairOne = next;
        pairTwo = pairOne ? pairOne.next : null;
        next = pairTwo ? pairTwo.next : null;
    }
    return newHead;
}
;
var newList = new ListNode(1);
newList.next = new ListNode(2);
newList.next.next = new ListNode(3);
// newList.next.next.next = new ListNode(4);
console.log(swapPairs(newList));
