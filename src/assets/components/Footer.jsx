import React from 'react';
import layer from '../../assets/Images/car.png';
import logo from '../../assets/Images/logo.png';
import facebook from '../../assets/Images/facebook.png';
import twitter from '../../assets/Images/twitter.png';
import linkedin from '../../assets/Images/linkedin.png';

const Footer = () => {
  const secondaryTextColor100 = 'bg-secondary-800';

  const backgroundImageStyle = {
    backgroundImage: `url(${layer})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25%',
  };

  const backgroundContainerStyle = {
    marginTop: '30px', // Apply marginTop to this div
  };

  return (
    <footer className={`py-16  ${secondaryTextColor100}`}>
      <div className="h-1/2 relative px-8" style={backgroundContainerStyle}>
      <img src={layer} alt="Image" className='mt-32 absolute' width="100" height="100"/> {/* Apply marginTop to this div */}
        <div className="h-full relative"> {/* Apply background image styles here */}
          <div className="container mx-auto py-8 flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <div className="mb-4">
                <a href='/'><img src={logo} alt="Logo" className="mb-2" /></a>
               
              </div>
            </div>

            <div className="w-full md:w-1/4 text-white mb-4 md:mb-0">
                <h4 className="text-lg mb-8">Quick Links</h4>
                <ul className="text-sm mb-2"> {/* Add margin-bottom to the ul */}
                    <li className="text-sm mb-4"><a href="/">Home</a></li>
                    <li className="text-sm mb-4"><a href="/about">About</a></li>
                    <li className="text-sm mb-4"><a href="/services">Services</a></li>
                    <li className="text-sm mb-4"><a href="/blog">Products</a></li>
                </ul>
                </div>

            <div className="w-full md:w-1/4 mb-4 md:mb-0 text-white">
            <h4 className="text-lg mb-8">Contact Information</h4>
            <p className="text-sm mb-4">1 MM Close, Apo, Abuja</p> 
            <p className="text-sm mb-4">(234) 809-933-3315</p> 
            <p className="text-sm mb-4">info@motomarket.ng</p>
            </div>


            <div className="w-full md:w-1/4">
              <h4 className="text-lg mb-8 text-white">Social Links</h4>
              <div className="flex space-x-4">
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
