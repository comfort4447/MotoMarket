import React from 'react';
import Abt from '../../assets/Images/About.png';
import bar from '../../assets/Images/Bar1.png';
import Fade from 'react-reveal/Fade';

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Abt})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const secondaryTextColor100 = 'text-secondary-100';

  return (
    <section className='pl-8 pr-10 bg-cover bg-left h-screen flex items-center' id='about' style={backgroundImageStyle}>
      <Fade left>
        <div className="flex-block items-center">
          <img src={bar} alt="Small Image" className="mr-5 -mt-50" />
          <p className="max-w-xl text-lg md:text-xl lg:text-3xl mb-8 ">
            About Us
          </p>
          <p className={`font-custom max-w-7xl text-lg md:text-sm lg:text-xl ${secondaryTextColor100}`}>
            MotoMarket was founded in 2013 and is headquartered in Abuja, Nigeria. We develop proprietary 
            technology and systems for the primary mode of transportation in most human journeys: The Motor 
            Vehicle. Our primary mission is to use technology to help transform the culture of road users with 
            the ultimate goal of improving safety, whilst creating an enjoyable experience for all road users. 
            Our brand is synonymous with our ethos and core mission; which is to make the roads of Africa safer.
          </p> 
        </div>
      </Fade>
    </section>
  );
}

export default About;
