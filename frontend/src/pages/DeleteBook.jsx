import "../styles/DeleteBook.css"

const DeleteBook = () => {

    return (
        <>
            <main>
                <header>
                    <h1><u>Welcome to Carson's Book Archive</u></h1>
                    <nav class="main-nav">
                        <a href="/">Home</a>
                        <a href='/add'>Add Book</a>
                        <a href='/delete'>Delete Book</a>
                    </nav>
                </header>
            </main>
        </>
    )
};

export default DeleteBook;