import { useEffect } from 'react';
import '../styles/HomePage.css'
import { useBookArchive } from '../archive/book'
import BookCard from './BookCard';

const Home = () => {
    const {fetchBooks, books} = useBookArchive();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);
    console.log("books:", books)

    return (
        <>
            <main>
                <header>
                    <h1><u>Welcome to Carson's Book Archive</u></h1>
                    <nav class="main-nav">
                        <a href='/add'>Add Book</a>

                    </nav>
                </header>
                
                <section class="book-script">
                    <script>
                        if(!books){
                            <section>
                                <h3>No books currently on display. Add some <a href='/add'>here</a></h3>
                            </section>
                        }
                    </script>
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Home