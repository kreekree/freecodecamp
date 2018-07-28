class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const lol = new Book('anonymous');
console.log(lol.writer);
lol.writer = 'wut';
console.log(lol.writer);
