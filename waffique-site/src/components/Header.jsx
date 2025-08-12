import { Link } from 'react-router-dom';
import waffique_logo from '../assets/Waffique_Logo.png'

const Header = () => {

    return (

        <header>
            {/* <Link to="/">
                <img className='waffique_logo' src={logo} alt="Logo" />
            </Link> */}
            


        <div className="helper">
            <Link to='/'>Home</Link>
        </div>


            


        </header>

);

};

export default Header;