class Book{
    constructor(name,author,genre,rating){
        this.name=name;
        this.author=author;
        this.genre=genre;
        this.rating=rating;
    }
    changeBookName(bookName){
        this.name=bookName;
    }
}
export  default Book;