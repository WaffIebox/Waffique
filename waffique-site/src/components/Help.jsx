import { Link } from 'react-router-dom';
import waffique_logo from '../assets/Waffique_Logo.png'

const Help = () => {

    return (

      <div className="help">

        {/* <div className='title'>
            <Link to="/"><img className='waffique_logo' src={waffique_logo}></img></Link>
            {/* <a href='/' className='waffique_name'>Waffique</a> */}
        


        <nav className="nav-links">
                <Link to='/seasonal' className='title'>Seasonal</Link>
                <Link to='/' className="quote-button">Calendars</Link>
                <Link to="/" className="title">To-Do-Lists</Link>
                <Link to="/" className="title">Websites</Link>
                <Link to="/" className="title">Other</Link>
        </nav>
    
    
    </div>

    );


}


export default Help;