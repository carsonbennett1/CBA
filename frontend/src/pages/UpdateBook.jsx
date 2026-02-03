import { useState } from 'react'
import { useBookArchive } from '../archive/book'
import { toast } from "react-toastify"
import "../styles/AddBook.css"

const UpdateBook = () => {
    const [bookToUpdate, setBookToUpdate ] = useState({
        name:"",
        pages:"",
        image:"",
    });

    const {updateBook} = useBookArchive();

    const handleUpdateBook = async() => {
        if(!bookToUpdate.name){
            const notify = () => {
                toast.error("You MUST input book name.", {
                    autoClose: 3000,
                });
            }
            notify();
        
        }else{
            const {success} = await updateBook(bookToUpdate.name)
            if(!success){
                const notify = () => {
                    toast.error("Unsuccessful update book attempt", {
                        autoClose: 3000,
                    });
                }
                notify();
            }
            
            if(success){
                const accept = () => {
                    toast.success("Successfuly updated book in archive.", {
                        autoClose: 3000,
                    })
                }
                accept();
            }
        }
    }

    return (
        <>
            <header>
                <h1><u>Welcome to Carson's Book Archive</u></h1>
                <nav class="main-nav">
                    <a href="/">Home</a>
                    <a href='/add'>Add Book</a>
                    <a href='/delete'>Delete Book</a>
                    <a href='/update'>Update Book</a>
                </nav>
            </header>
            <main>
                <section class="under-construction">
                    <h3>Page Under Construction - NO FUNCTIONALITY</h3>
                </section>
                <section class="add-book">
                    <section class="add-name-details">
                        <label>1.Please add your book name:</label><br/>
                        <input
                            placeholder='Book Name' 
                            name='name' 
                            value={bookToUpdate.name}
                            onChange={(e) => setBookToUpdate({ ...bookToUpdate, name: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    <section class="add-page-details">
                        <label>2.Number of pages:</label>
                        <input
                            placeholder='num. pages' 
                            name='pages'
                            type='number'
                            value={bookToUpdate.pages}
                            onChange={(e) => setBookToUpdate({ ...bookToUpdate, pages: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    <section class="add-url-details">
                        <label>3.Image link:</label><br/>
                        <input
                            placeholder='link' 
                            name='image' 
                            value={bookToUpdate.image}
                            onChange={(e) => setBookToUpdate({ ...bookToUpdate, image: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    {/* <button onClick={handleUpdateBook}>
                        Submit
                    </button> */}
                </section>
            </main>
        </>
    )

}

export default UpdateBook;