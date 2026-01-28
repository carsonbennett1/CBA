import '../styles/HomePage.css'

const BookCard = ({book}) => {
    return (
        <>
            <div class="item">
                <h3>{book.name}</h3>
                <img src={book.image} alt={book.name}/>
                <h5>Number of pages: {book.pages}</h5>
            </div>
        </>
    )
};

export default BookCard;