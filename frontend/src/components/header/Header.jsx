import "../../styles/Header.css"
const Header = () => {

    return (
        <>
            <header>
                <h1><u>Welcome to Carson's Book Archive!</u></h1>
                <nav class="main-nav">
                    <a href='/'>Home</a>
                    <a href='/add'>Add Book</a>
                    <a href='/delete'>Delete Book</a>
                    <a href='/update'>Update Book</a>
                </nav>
            </header>
        </>
    );
};

export default Header;