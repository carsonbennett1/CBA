import { useState } from 'react'
import { useBookArchive } from '../archive/book'
import { toast } from "react-toastify"
import "../styles/InputStyle.css"
import Header from '../components/header/Header'

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
            <Header />
            <main>
                <section class="input-section">
                    <section class="name-input-section">
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
                    <section class="page-input-section">
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
                    <section class="url-input-section">
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