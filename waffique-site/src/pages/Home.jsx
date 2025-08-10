import website_box from '../assets/custom_website.png'
import blog_box from '../assets/custom_blog.png'
import portfolio_box from '../assets/custom_portfolio.png'
import other_box from '../assets/custom_other.png'
import social_media from '../assets/social_media.png'

const Home = () => {
  return (

    <home>

        <div className='sample_website'>
          <img src={social_media} alt="Media Home" />
        </div>

        <div className="image-boxes">
            <img src={website_box} alt="Wesbites That Win" />
            <img src={portfolio_box} alt="Portfolios That Pop" />
            <img src={blog_box} alt="Blogs That Boom" />
            <img src={other_box} alt="Other That Other" />

        </div>

    </home>

   );
};

export default Home;