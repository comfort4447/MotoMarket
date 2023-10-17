import React from 'react';
import bg from '../Images/Motohub.png';

const Project2 = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };
  return (
    <div className="bg-gray-50 h-[80vh] py-16" id="projects">
      <div className="container mx-auto text-center relative">
        {/* Background Image */}
        <img src={bg} alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />

        <div className="relative bg-white bg-opacity-80 p-8 rounded-lg">
          <h1 className="text-3xl text-gray-900 font-semibold mb-4">Our Projects</h1>
          <p className="text-black mx-auto max-w-xl text-opacity-40 text-center mb-4">
            Our customer-focused projects are developed after intensive research and development with an ethos of service, simplicity, and a sustained strive for innovation.
          </p>

          <div className="text-center">
            <a href="/your-demo-link" className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
              View Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
