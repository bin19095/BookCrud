import { useState } from "react";
function BookCreate( {onCreate}) {
    const [ value, setValue ] = useState( '' );

    const handleClick = (event) =>{
        event.preventDefault();
        onCreate(value);
        setValue('');
       
       
    }
const handleChange = (event) =>{
   // console.log(event.target.value);
    setValue(event.target.value);
}
    return (   
    <div className="book-create">
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