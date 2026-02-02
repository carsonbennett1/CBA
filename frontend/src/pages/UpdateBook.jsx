import { useState } from 'react'
import { useBookArchive } from '../archive/book'
import { toast } from "react-toastify"
import "../styles/AddBook.css"

const UpdateBook = () => {

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
                <section class="add-book">
                    <section class="add-name-details">
                        <label>1.Please add your book name:</label><br/>
                        <input
                            placeholder='Book Name' 
                            name='name' 
                            // value={newBook.name}
                            // onChange={(e) => setNewBook({ ...newBook, name: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    <section class="add-page-details">
                        <label>2. Number of pages:</label>
                        <input
                            placeholder='num. pages' 
                            name='pages'
                            type='number'
                            // value={newBook.pages}
                            // onChange={(e) => setNewBook({ ...newBook, pages: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    <section class="add-url-details">
                        <label>3. Image link:</label><br/>
                        <input
                            placeholder='link' 
                            name='image' 
                            // value={newBook.image}
                            // onChange={(e) => setNewBook({ ...newBook, image: e.target.value})} 
                        />
                        <br/><br/>
                    </section>
                    {/* <button onClick={handleAddBook}> */}
                    <button>
                        Submit
                    </button>
                </section>
            </main>
        </>
    )

}

export default UpdateBook;