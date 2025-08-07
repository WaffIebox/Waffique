import { Link } from 'react-router-dom';
import logo from '../Waffique_Logo.png';
import search_logo from '../Search_Logo.png'

const Header = () => {

    return (

        <header>
            {/* <Link to="/">
                <img className='waffique_logo' src={logo} alt="Logo" />
            </Link> */}
            <nav>
                <ul>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </nav>
            


        <div className='get_started'>
            <nav>
                <ul>
                    <li><Link to="/portfolios">start-my-project</Link></li>
                </ul>
            </nav>
        </div>

            <nav>
                <ul>
                    <li><Link to="/portfolios">sign-in</Link></li>
                </ul>
            </nav>





            


        </header>

);

};

export default Header;