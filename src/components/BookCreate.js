import { useState } from "react";
import './style.css';
import useBooksContext from '../hooks/use-hooks-context';

function BookCreate() {
    const [ value, setValue ] = useState( '' );
    const { handleCreate } = useBooksContext();
    const handleClick = (event) =>{
        event.preventDefault();
        handleCreate(value);
        setValue('');
       
       
    }
const handleChange = (event) =>{
   // console.log(event.target.value);
    setValue(event.target.value);
}
    return (   
    <div className="book-create book-cr-div">
        <h3>Add a Book</h3>
        <form onSubmit={handleClick}>
            <label>Title</label>
            <input  className="input" value={value} onChange ={ handleChange } />
            <button  className="button">
                Click me
            </button>
        </form>
     
    </div>)


}
export default  BookCreate;