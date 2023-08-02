import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Link to='/'>
            <header>Home</header>
            <div id="space"></div>
        </Link>
    );
}
 
export default Header;