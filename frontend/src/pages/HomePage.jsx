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
                <h1><u>Welcome to Carson's Book Archive</u></h1>

                <aside id='home-aside'>
                    <nav>
                        <h2><a href='/add'>Add Books</a></h2>
                        <h2>Update Books</h2>
                        <h2>Delete Books</h2>
                        <h2>More Infor on Author</h2>
                        <h2>Essays of Interest</h2>
                    </nav>
                </aside>

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
            </main>
        </>
    )
}

export default Home