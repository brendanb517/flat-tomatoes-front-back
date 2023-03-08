import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/create_comment">Create Comment</Link>
            <Link to="/update_comment">Update Comment</Link>
        </>
    )
}

export default NavBar;