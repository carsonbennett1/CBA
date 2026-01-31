import { useState } from 'react'
import { useBookArchive } from '../archive/book'
import { toast } from "react-toastify"
import "../styles/AddBook.css"

const AddBook = () => {
    const [newBook, setNewBook ] = useState({
        name:"",
        pages:"",
        image:"",
    })

    const {addBook} = useBookArchive()
    const handleAddBook = async() => {
        
        if(!newBook.name || !newBook.pages || !newBook.image){
            const notify = () => {
                toast.error("Empty submission fields.", {
                    autoClose: 3000,
                });
            }
            notify();
        
        }else{
            const {success} = await addBook(newBook)
            if(!success){
                const notify = () => {
                    toast.error("Unsuccessful add book attempt", {
                        autoClose: 3000,
                    });
                }
                notify();
            }
            
            if(success){
                const accept = () => {
                    toast.success("Successfuly added book to archive.", {
                        autoClose: 3000,
                    })
                }
                accept();
            }
        }
    }

    return(
        <>
            <header>
                <h1><u>Welcome to Carson's Book Archive</u></h1>
                <nav class="main-nav">
                    <a href="/">Home</a>
                    <a href='/add'>Add Book</a>
                    <a href='/delete'>Delete Book</a>
                </nav>
            </header>
            <main>
                <section class="add-book">
                    <section class="add-name-details">
                        <label><span class="required-symbol">*</span> 
                            1.Please add your book name:</label><br/>
                        <input
                            placeholder='Book Name' 
                            name='name' 
                            value={newBook.name}
                            onChange={(e) => setNewBook({ ...newBook, name: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    <section class="add-page-details">
                        <label><span class="required-symbol">*</span> 
                            2. Number of pages:</label>
                        <input
                            placeholder='num. pages' 
                            name='pages'
                            type='number'
                            value={newBook.pages}
                            onChange={(e) => setNewBook({ ...newBook, pages: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    <section class="add-url-details">
                        <label><span class="required-symbol">*</span> 
                            3. Image link:</label><br/>
                        <input
                            placeholder='link' 
                            name='image' 
                            value={newBook.image}
                            onChange={(e) => setNewBook({ ...newBook, image: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    <button onClick={handleAddBook}>
                        Submit
                    </button>
                </section>
            </main>
        </>
    )
}

export default AddBook