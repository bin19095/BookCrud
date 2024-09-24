import BookShow from './BookShow';
function BookList({ bookList, onDelete, editBook }) {
    const renderBook = bookList.map((book) =>{
       return <BookShow key={book?.id} book={book} onRemove={onDelete} editBook={editBook} />;
    });
    return ( <div className="book-list">
        {renderBook} 
    </div>

    )

}
export default BookList;