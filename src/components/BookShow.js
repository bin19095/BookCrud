import { useState } from 'react';
import './style.css';
import useBooksContext from '../hooks/use-hooks-context';
import BookEdit from './BookEdit'
function BookShow( {book} ){
    const [showEdit, setShowEdit ] = useState(false);
    const {deleteBookById} = useBooksContext();
    const handleDeleteClick = () => {
       deleteBookById(book.id);
    };
    const handleClickEdit = () => {
        setShowEdit(!showEdit);
    };
    const handleSubmit = () =>{
        setShowEdit(false);
       // handleEdited(id,newTitle);
    }
   let content = <div style={{width:'300', height:'36', fontSize:"40", fontWeight:"bolder"}}> {book.title} </div>
   if(showEdit){
    content = <BookEdit  book={book} onSubmit={handleSubmit} />;
   }
  let testImg =  <img 
                    alt ="books"
                    src={`https://picsum.photos/seed/${book.id}/300/200`}/>;


    return( <div className="book-show book-pointer-show" style={{zIndex:'', width:'300', height:'250'}}>
        {testImg ? testImg: 'Loading'}
        <div className="book-sh-div">    {content} </div>      
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