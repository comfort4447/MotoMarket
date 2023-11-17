import React from 'react';
// import Fade from 'react-reveal/Fade';
import traffic from '../../assets/Images/traffic.png';
import park from '../../assets/Images/parking.png';
import security from '../../assets/Images/security.png';
import transport from '../../assets/Images/transport.png';
import bar from '../../assets/Images/Bar1.png';

const Service = () => {
  return (
    // <Fade>
      <div className="bg-gray-900 min-h-screen py-16" id='services'>
        <div className="container mx-auto text-center">
        <div data-aos="fade-down"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0">
          <img src={bar} alt="Small Image" className="mt-2 text-center mx-auto" />
          <h1 className="text-3xl text-white font-semibold mb-4">Our Services</h1>
          <p className="text-white text-opacity-40 text-center mx-auto max-w-xl mb-24">
            Our services are tailored to the specific requirements of the various stakeholders in the
            transportation industry
          </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
                data-aos-duration="1500">
              <div className="flex p-4">
                <img src={traffic} alt="Service 1" className="w-16 h-16 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold mb-2 text-white text-left">Traffic Enforcement Software</h2>
                  <p className="text-white text-opacity-40 text-left">
                    We provide custom traffic enforcement and security software, hardware and training to
                    federal and state enforcement agencies allowing for the complete digitization of enforcement activities.
                  </p>
                  </div>
                </div>
              </div>

            {/* Service 2 */}
            {/* <Fade right> */}
            <div data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="2000">
              <div className="flex p-4">
                <img src={security} alt="Service 2" className="w-16 h-16 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold mb-2 text-white text-left">Driver and Vehicle Risk Profiling</h2>
                  <p className="text-white text-opacity-40 text-left">
                    We developed the official risk rating system used by the Nigerian Insurers Association (NIA) for risk-based vehicle insurance pricing and provide data for the driver’s license points-based system.
                  </p>
                </div>
                </div>
              </div>
            {/* </Fade> */}

            {/* Service 3 */}
            {/* <Fade left> */}
            <div data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="2500">
              <div className="flex p-4">
                <img src={park} alt="Service 3" className="w-16 h-16 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold mb-2 text-white text-left">Parking systems</h2>
                  <p className="text-white text-opacity-40 text-left">
                    We design parking management systems for public and private urban and estate planning. We are currently designing a national disability parking permit database.
                  </p>
                </div>
                </div>
              </div>
            {/* </Fade> */}

            {/* Service 4 */}
            {/* <Fade right> */}
            <div data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000">
              <div className="flex p-4">
                <img src={transport} alt="Service 4" className="w-16 h-16 mr-4" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold mb-2 text-white text-left">Public Transportation</h2>
                  <p className="text-white text-opacity-40 text-left">
                    We are currently developing technologies to enhance the journeys of public transportation users.
                  </p>
                  </div>
                </div>
              </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    // </Fade>
  );
};

export default Service;
