class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class State {
    constructor() {
        this.current = null;
    }

    get() {
        return this.current ? this.current.val : '';
    }

    insert(string) {
        if (!this.current) {
            this.current = new Node(string);
        } else {
            this.current.next = new Node(string);
            this.current.next.prev = this.current;
            this.current = this.current.next;
        }
    }

    delete() {
        if (this.current) {
            this.insert(this.get().slice(0, this.get().length - 1));

        }
    }

    undo() {
        this.current = this.current.prev;
    }

    redo() {
        if (this.current.next) this.current = this.current.next
    }

}

function performActions(actions) {
    let state = new State();

    for (let action of actions) {
        if (action[0] === 'INSERT') {
            state.insert(state.get() + action[1]);
        }
        if (action[0] === 'DELETE') state.delete();
        if (action[0] === 'UNDO') state.undo();
        if (action[0] === 'REDO') state.redo();
    }

    return state.get();
}

let actions = [
    ['INSERT', 'a'],
    ['INSERT', 'b'],
    ['DELETE'],
    ['INSERT', 'c'],
    ['UNDO'],
    ['INSERT', 'l'],
    ['UNDO'],
    ['UNDO'],
    ['REDO'],
    ['REDO'],
    ['REDO'],
];

let result = performActions(actions);
console.log(result);

