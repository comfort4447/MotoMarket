import React from 'react';
import Background from '../../assets/Images/mobile.png';
import Bar from '../../assets/Images/bar.png';
import About from './About';
import Service from './Services';
import Project from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import OurTeam from './OurTeam';

const Hero = () => {
  return (
    <div>
      <Header />
      <section className="px-7 bg-cover bg-left h-screen flex items-center" id='hero' style={{ backgroundImage: `url(${Background})` }}>
      
        <div className="container mx-auto text-white">
          <div className="max-w-2xl text-left p-4 md:p-0">
          <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
              <h1 className="max-w-2xl text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-0">Building systems for safer road transit</h1>
              </div>
              <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-offset="0">
            <div className="flex items-center">
            
                <img src={Bar} alt="Small Image" className="mr-5" />

                <p className="max-w-2xl text-lg md:text-xl lg:text-xl mb-8 mt-6">
                  MotoMarket provides data, information, and intelligence technology and services to vehicle owners, road users, as well as administrators and enforcers of traffic policies
                </p>
                </div>
            </div>
            <div data-aos="fade-right"
                data-aos-easing="ease-in-back"
                data-aos-delay="700"
                data-aos-offset="0"
                data-aos-duration="1500">
              <a href='#projects'><button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full focus:outline-none">View Project</button></a>
              </div>
        </div>
        </div>
      </section>
      <About />
      <Service />
      <Project />
      <OurTeam />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Hero;
