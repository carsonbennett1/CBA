import { useState } from 'react'
import { toast } from "react-toastify"
import "../styles/DeleteBook.css"
import { useBookArchive } from '../archive/book';
import Header from '../components/header/Header';

const DeleteBook = () => {
    const [bookToDelete, setBookToDelete] = useState({
        name:"",
    });

    const {deleteBook} = useBookArchive();
    const handleDeleteBook = async() => {
        if(!bookToDelete.name){
            const notify = () => {
                toast.error("Please enter a book name", {
                    autoClose: 3000,
                });
            }
            notify();
        }else{
            let deleteValidation = confirm("Are you sure you want to DELETE '" + bookToDelete.name + "'?")
            if(deleteValidation){
                const { success } = await deleteBook(bookToDelete.name)
                if(!success){
                    const notify = () => {
                        toast.error("Unsuccessful delete book attempt. Does it exist?", {
                            autoClose: 3000,
                        });
                    }
                    notify();
                }
                
                if(success){
                    const accept = () => {
                        toast.success("Successfuly deleted book from archive.", {
                            autoClose: 3000,
                        })
                    }
                    accept();
                }
            };
        }
    };

    return (
        <>
            <Header />
            <main>
                <section class='delete-book'>
                    <label><span class="required-symbol">* </span> 
                        Name of Book to be deleted:
                    </label><br/>
                    <input
                        placeholder="Book Name"
                        name="name"
                        value={bookToDelete.name}
                        onChange={(e) => setBookToDelete({ ...bookToDelete, name: e.target.value })}
                    />
                    <br/><br/>
                    <button onClick={handleDeleteBook}>DELETE</button>
                </section>
            </main>
        </>
    )
};

export default DeleteBook;