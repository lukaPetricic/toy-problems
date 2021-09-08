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

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    //push pointers to array
    let pointers: ListNode[] = [];
    let current: ListNode | null = head;

    while (current) {
        pointers.push(current);
        current = current.next
    }

    //swap pairs
    function swap(a: number, b: number): void {
        let temp = pointers[a];
        pointers[a] = pointers[b];
        pointers[b] = temp;
    }

    for (let i = 0; i < pointers.length; i += 2) {
        if (pointers[i + 1]) swap(i, i + 1);
    }

    //connect to a list
    for (let i = 0; i < pointers.length; i++) {
        pointers[i].next = pointers[i + 1] || null;
    }

    return pointers[0]
};

let newList = new ListNode(1);
newList.next = new ListNode(2);
newList.next.next = new ListNode(3);
// newList.next.next.next = new ListNode(4);
