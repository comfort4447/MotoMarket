import React from 'react';
import Slide from 'react-reveal/Slide';
import bar from '../../assets/Images/Bar1.png';
import mac from '../../assets/Images/Mac.png';
import moto from '../../assets/Images/moto.png';
import iPhone2 from '../../assets/Images/iPhone2.png';
import iPhone1 from '../../assets/Images/iPhone1.png';
import MMAPP from '../../assets/Images/MMAPP.png';
import MOTOFIT from '../../assets/Images/MOTOFIT.png';

const Project = () => {
  return (
    <div className="bg-gray-50 py-16" id='projects'>
      <Slide top>
        <div className="container mx-auto text-center">
          <img src={bar} alt="Small Image" className="mx-auto" />
          <h1 className="text-3xl text-gray-900 font-semibold mb-4">Our Projects</h1>
          <p className="text-black mx-auto max-w-xl text-opacity-40 text-center">
            Our customer-focused projects are developed after intensive research and development with an ethos of service, simplicity, and sustained strive for innovation
          </p>
        </div>
      </Slide>
      <Slide bottom>
        <div className="mt-16 relative bg-secondary-600">
          <img
            src={moto}
            alt="Background Image"
            className="absolute mt-8 w-auto sm:w-1/2"
          />
          <div className="container mx-auto text-left text-white relative z-10 py-16 md:p-8">
            <div className="px-8 md:px-0"> {/* Add padding to this container */}
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 mt-4 text-black">
                Motohub
              </h1>
              <div className="flex flex-col sm:flex-row items-center  justify-around">
                <p className="text-opacity-70 flex-grow text-black max-w-full sm:max-w-xl">
                  MotoHub is our flagship project. It is designed to improve road safety and accountability through the digitization of traffic enforcement operations and the introduction of risk-based vehicle insurance pricing.
                  <br />
                  <br />
                  We collaborated with traffic enforcement organizations and the insurance industry to completely digitize traffic enforcement activities, thereby improving their efficiency and increasing insurance penetration. Utilizing the electronic records for insurance premium pricing also introduces a culture of accountability, which will ultimately make the roads safer.
                </p>
                <img
                  src={mac}
                  alt="Your Image"
                  className="w-auto mt-16 sm:block"
                />
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 ml-8 sm:ml-0 text-white font-semibold px-6 py-3 rounded-xl focus:outline-none">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </Slide>

      <div className="flex flex-col gap-10 justify-center items-center p-8 md:flex-row md:gap-8 lg:gap-20 mt-20">
        <Slide left>
          <div className="w-full md:w-1/2 relative bg-secondary-600 p-4 m-4 flex flex-col rounded-3xl">
            <img src={MMAPP} alt="Image" className="mt-8 absolute" />
            <div className="pl-4 md:pl-8"> {/* Add padding to this container */}
              <h2 className="text-xl md:text-2xl font-semibold mt-10">
                MotoMarket App
              </h2>
              <p className="text-gray-600 mt-6 md:mt-10">
                Coming Soon...
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-20 mt-4 md:mt-10">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl focus:outline-none">
                  View Site
                </button>
                <img
                  src={iPhone2}
                  alt="Image 1"
                  className="w-full md:w-1/2 h-auto md:h-3/4"
                />
              </div>
            </div>
          </div>
        </Slide>

        <Slide right>
          <div className="w-full md:w-1/2 relative bg-secondary-400 p-4 m-4 flex flex-col rounded-3xl">
            <img src={MOTOFIT} alt="Image" className="mt-4 absolute" />
            <h2 className="text-xl md:text-2xl text-yellow-500 mt-10">
              Haima Health Initiative
            </h2>
            <p className="text-white mt-6 md:mt-10">
              We built an application that allows for the real-time tracking and administration of emergency blood requests and donations, helping the internationally recognized Haima Health Initiative with their life-changing mission to bridge the blood supply gap across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-20 mt-4 md:mt-10">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl focus:outline-none">
                View Site
              </button>
              <img
                src={iPhone1}
                alt="Image 2"
                className="w-full md:w-1/2 h-auto md:h-3/4"
              />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Project;
