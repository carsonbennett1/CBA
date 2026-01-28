import '../styles/HomePage.css'

const BookCard = ({book}) => {
    return (
        <>
            <div class="item">
                <h1>{book.name}</h1>
                <h3>{book.pages}</h3>
            </div>
        </>
    )
};

export default BookCard;