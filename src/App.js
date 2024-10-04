import { useContext, useEffect, useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import './components/style.css';
import BooksContext from './context/books';


function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

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
 

  // const handleEdited = (id,newTitle) => {
  //   const updatedBooks = books.map((book) =>{
  //     if(book.id === id){
  //       return {...book, title:newTitle };
  //     }
  //     return book;
  //   });
  //   setBooks(updatedBooks);
  // };
  const [show,setShow] = useState(true);
  const hideCreateBook = () => {
    setShow( currentShowState => {
      return !currentShowState;
    }

    )
  }
let btnText= show ? "Hide" : " +Book";

  return (
    <div className="App">
     <h4 className="is-size-3 has-text-centered has-text-weight-bold"> Reading List </h4>
      {show ? <BookCreate/>: "" }
      <BookList/>
      <button className="btn-bottom button is-info" onClick={hideCreateBook}> {btnText} </button>
   
  
    </div>
  );
}

export default App;
