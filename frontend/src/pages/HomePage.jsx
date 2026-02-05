import { useEffect } from 'react';
import '../styles/HomePage.css'
import { useBookArchive } from '../archive/book'
import BookCard from './BookCard';
import Header from '../components/header/Header';
import BookRetrieval from '../components/bookRetrieval/BookRetrieval.js';

const Home = () => {
    const {fetchBooks, books} = useBookArchive();

    return (
        <>  
            <Header />
            <main>
                <BookRetrieval />
            </main>
        </>
    )
}

export default Home