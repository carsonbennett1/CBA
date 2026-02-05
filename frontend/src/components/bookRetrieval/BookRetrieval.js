import { useBookArchive } from "../../archive/book"

const BookRetrieval = () => {

    const { books } = useBookArchive

    return (
        <>
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
        </>
    )

}

export default BookRetrieval;