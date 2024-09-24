import { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  
    const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    };
    useEffect(() => {
      fetchBooks();
    }, []);

   const handleCreate = async (title) => {
    const response = await axios.post('http://localhost:3001/books',{ title,
      });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
   }

   /*
   const handleCreate = (title) => {
    const updatedBOoks = [
    ...books,
    {id: Math.round(Math.random()*9999),
    title,
    },
    ];
    setBooks(updatedBooks);
    }
   */
    ////////////////////////////////////
    // const updateBooks = [...books,
    //   { id:Math.round(Math.random()* Math.random() *999) ,title}
    // ];
    // setBooks(updateBooks);
    // console.log("print the title", title);
  
  
  // const deleteBookById = (id) => {
  //   const updatedBooks = books.filter((book) => {
  //     return book.id !==id;
  //   });
  //   setBooks(updatedBooks);
  // }
  const deleteBookById = async (id) =>{
     await axios.delete(`http://localhost:3001/books/${id}`);
   const updatedBooks = books.filter((book) =>{
    return book.id!==id;
   })
    setBooks(updatedBooks);
  }

  // const handleEdited = (id,newTitle) => {
  //   const updatedBooks = books.map((book) =>{
  //     if(book.id === id){
  //       return {...book, title:newTitle };
  //     }
  //     return book;
  //   });
  //   setBooks(updatedBooks);
  // };
  const handleEdited = async (id, newTitle) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle,
      });
      console.log(response.data);
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

  return (
    <div className="App">
     <h4 className="is-size-3 has-text-weight-bold"> Reading List </h4>
      <BookCreate  onCreate={handleCreate}/>
      <BookList 
      bookList={books} 
      onDelete={deleteBookById}
      editBook ={handleEdited}
      />
  
    </div>
  );
}

export default App;
