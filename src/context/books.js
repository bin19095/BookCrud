import { createContext, useState} from 'react';
import axios from 'axios';
 
const BooksContext = createContext();

function Provider({ children }){
    const [books, setBooks] = useState([]);
  
    const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    };

    const handleCreate = async (title) => {
        const response = await axios.post('http://localhost:3001/books',{ title,
          });
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
       }

       const deleteBookById = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`);
      const updatedBooks = books.filter((book) =>{
       return book.id!==id;
      })
       setBooks(updatedBooks);
     }
     
     const handleEdited = async (id, newTitle) => {
        try {
          const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
          });
          
          const updatedBooks = books.map((book) =>{
            if(book.id === id){
              return {...book, ...response.data };
            }
            return book;
          });
          setBooks(updatedBooks);
        } catch (error) {
          console.error('There was an error updating the book!', error);
        }
       
      }
    
  const valueToShare = {
    books,
    fetchBooks,
    handleCreate,
    deleteBookById,
    handleEdited
  };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}
export { Provider };
export default BooksContext;
