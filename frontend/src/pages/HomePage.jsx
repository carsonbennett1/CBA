import { useEffect } from 'react';
import '../App.css'
import { useBookArchive } from '../archive/book'

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
                <section>
                    <h3>No books currently on display. Add some <a href='/add'>here</a></h3>
                </section>
            </main>
        </>
    )
}

export default Home