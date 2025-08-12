import social_media from '../assets/social_media.png'
import social_vid from '../assets/www.waffique.com.mp4'
import september from '../assets/september.png'

const Home = () => {
  return (

    <home>

      <div className='home_page'>


        <div className='sample_website'>
          <img src={social_media} alt="Media Home" />
        </div>
                
        <div className='waff_vid'>
          <video width="600" autoPlay loop muted>
            <source src={social_vid} alt="Vid Home" />
          </video>
        
        </div>

      </div>

      <div className='sept_sale'>
        <a href='/seasonal'><img src={september} alt='sept' /></a>
      </div>




    </home>

   );
};

export default Home;