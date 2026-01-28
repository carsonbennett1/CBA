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
                <h1>Welcome</h1>
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