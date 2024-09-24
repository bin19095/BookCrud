import { useState } from 'react';
import BookEdit from './BookEdit'
function BookShow( {book, onRemove, editBook} ){
    const [showEdit, setShowEdit ] = useState(false);
    const handleDeleteClick = () => {
       onRemove(book.id);
    };
    const handleClickEdit = () => {
        setShowEdit(!showEdit);
    };
    const handleSubmit = (id, newTitle) =>{
        setShowEdit(false);
        editBook(id,newTitle);
    }
   let content = <h3> {book.title} </h3>
   if(showEdit){
    content = <BookEdit  book={book} onSubmit={handleSubmit} />;
   }
  let testImg =  <img 
                    alt ="books"
                    src={`https://picsum.photos/seed/${book.id}/300/200`}/>;


    return( <div className="book-show" style={{zIndex:'10', width:'300', height:'267'}}>
        {testImg ? testImg: 'Loading'}
        <div>    {content} </div>      
        <div className="actions">
            <button onClick={handleClickEdit} className="edit" >
                Edit
            </button>
    
        <button className="delete" onClick={handleDeleteClick}>
            Delete
        </button>
        </div>
    </div>
    );
}
export default BookShow;