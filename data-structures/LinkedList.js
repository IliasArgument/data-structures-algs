//data structures
// Map, Set, Array, LinkedList, graph

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = { data, next: null } // new Node(data)

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
    }
    prepend(data) {
        const node = new Node(data, this.head)
        this.head = node

        if (!this.tail) {
            this.tail = node
        }
    }

    insertAfter(after, data) {
        const found = this.find(after)
        if (!found) {
            return
        }
        found.next = new Node(data, found.next)
    }

    find(data) {
        if (!this.head) {
            return
        }
        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }
            current = current.next
        }
    }

    toArrray() {
        let output = []
        let current = this.head;
        while (current) {
            // console.log(current, '777')
            output.push(current)
            current = current.next
        }
        return output
    }

    remove(data) {
        if (!this.head) {
            return
        }
        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head

        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        if (this.tail.data === data) {
            this.tail = current
        }
    }
}

const list = new LinkedList();
list.append(21)
list.append('name')
list.append('is')
list.append('Ilia')
list.append(12)
list.remove(12)
console.log(list.toArrray(), 'arrray')