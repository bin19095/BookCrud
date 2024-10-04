
import BookShow from './BookShow';
import useBooksContext from '../hooks/use-hooks-context';
function BookList() {
    const { books } = useBooksContext();
    const renderBook = books.map((book) =>{
       return <BookShow key={book?.id} book={book}  />;
    });
    return ( <div className="book-list">{renderBook}  </div>

    );

}
export default BookList;