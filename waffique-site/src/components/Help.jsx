import { Link } from 'react-router-dom';
import waffique_logo from '../assets/Waffique_Logo.png'

const Help = () => {

    return (

      <div className="help">

        {/* <div className='title'>
            <Link to="/"><img className='waffique_logo' src={waffique_logo}></img></Link>
            {/* <a href='/' className='waffique_name'>Waffique</a> */}
        


        <nav className="nav-links">
                <Link to='/' className='title'>Home</Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXr4SZfwOv6yblz0IlhUNvKJGGlopr9Phs9hW8DbpgeUnNig/viewform?usp=preview" target="_blank" className="quote-button">Get a Quote</a>
                <Link to="/contact" className="contact-header">Contact</Link>
        </nav>
    
    
    </div>

    );


}


export default Help;