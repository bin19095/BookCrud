
import { useState } from 'react';
import useBooksContext from '../hooks/use-hooks-context';

function BookEdit( { book, onSubmit } ){
    const [title, setTitle] = useState(book.title);
    const { handleEdited } = useBooksContext();

    const handleChange = (event) =>{
        setTitle(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit();
        handleEdited(book.id,title);
        
    }
    return(<form onSubmit={handleSubmit} className="book-edit">
        <label> Title </label>
            <input className="input" value={title} onChange={handleChange} type="text"/>
            <button className="button is-primary">
                 Save
            </button>
        </form>
    );
}

export default BookEdit;