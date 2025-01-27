import { createContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {db} from '../lib/firestoreConfig';

const BooksContext = createContext();

function Provider({ children }) {
const [books, setBooks] = useState([]);

const booksCollection = collection(db, 'books');

//fetch books
const fetchBooks = async () => {
    try {
        const querySnapshot = await getDocs(booksCollection);
        const booksData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            }));
        setBooks(booksData);
        } catch(error) {
            console.error('Error fetching books', error);
            }
    }

//create  a book
const handleCreate = async( title ) =>{
    try{
        const docRef = await addDoc(booksCollection, { title });
        const newBook ={ id: docRef.id, title};
        setBooks([...books, newBook]);
        } catch(error) {
             console.error('Error creating book', error);
        }
    }

//Delete a Book by ID
const deleteBookById = async(id) =>{
    try{
        const docRef = doc(db, "books", id);
        await deleteDoc(docRef);
        const updatedBooks = books.filter((book) => book.id !==id);
        setBooks(updatedBooks);
        } catch(error){
            console.error("Error deleting book", error);        
        }
    }
    // Edited Book
const handleEdited = async (id, newTitle) => {
    try {
        const docRef = doc(db, "books", id);
        await updateDoc(docRef, { title: newTitle});
        
        const updatedBooks = books.map(( book) =>
            book.id ===id ? { ...book, title:newTitle } : book
        );
        setBooks(updatedBooks);
    } catch(error){
        console.log("Error updating book", error);
    }
};
useEffect(() =>{
    fetchBooks();

},[]);

return(
    <BooksContext.Provider
        value={{ books, fetchBooks, handleCreate, deleteBookById, handleEdited }}>
            {children}

        </BooksContext.Provider>
);
}
export { Provider };
export default BooksContext;
