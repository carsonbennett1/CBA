import { useEffect } from 'react';
import '../styles/HomePage.css'
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
                <script>
                    if(!books){
                        <section>
                            <h3>No books currently on display. Add some <a href='/add'>here</a></h3>
                        </section>
                    }
                </script>
                <section class="item">
                    <p>Book 1</p>
                </section>
                <section class="item">
                    <p>Book 2</p>
                </section>
                <section class="item">
                    <p>Book 3</p>
                </section>
                <section class="item">
                    <p>Book 4</p>
                </section>
            </main>
        </>
    )
}

export default Home