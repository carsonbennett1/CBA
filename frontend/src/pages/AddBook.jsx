import '../App.css'
import { useState } from 'react'

const AddBook = () => {
    const [newBook, setNewBook ] = useState({
        name:"",
        pages:"",
        image:"",
    })

    const handleAddBook = () => {
        console.log(newBook)
    }

    return(
        <>
            <header>
                <h1>This is the add book page</h1>
            </header>
            <main>
                <label>Please add your book name:</label><br/>
                <input
                    placeholder='Book Name' 
                    name='name' 
                    value={newBook.name}
                    onChange={(e) => setNewBook({ ...newBook, name: e.target.value})} 
                />
                <br/><br/>
                <label>Number of pages:</label><br/>
                <input
                    placeholder='num. pages' 
                    name='pages'
                    type='number'
                    value={newBook.pages}
                    onChange={(e) => setNewBook({ ...newBook, pages: e.target.value})} 
                />
                <br/><br/>
                <label>Image link:</label><br/>
                <input
                    placeholder='link' 
                    name='image' 
                    value={newBook.image}
                    onChange={(e) => setNewBook({ ...newBook, image: e.target.value})} 
                />
                <br/><br/>
                <button
                    onClick={handleAddBook}
                >
                    Submit
                </button>
            </main>
        </>
    )
}

export default AddBook