class Iterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.items.length;
    }
    next() {
        return this.items[this.index++];
    }
}

export default Iterator