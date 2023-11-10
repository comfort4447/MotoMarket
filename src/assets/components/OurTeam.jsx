import React from 'react';
import bar from '../../assets/Images/Bar1.png';
import Team from './Team';

const OurTeam = () => {
  

  return (
    <div className="bg-secondary-600 min-h-screen py-16" id='blog'>
      <div className="container mx-auto text-center">
        <img src={bar} alt="Small Image" className="-mt-25 text-center mx-auto" />
        <h1 className="text-3xl text-black font-semibold mb-2">Our Team</h1>
        <p className="text-Black text-center max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget semper ac dui lacus vitae auctor sit sem. Pretium sed nullam quis sit 
        </p>
      </div>
      <div className="container mx-auto text-center px-4">
        <Team />
      </div>
    </div>
  );
};

export default OurTeam;
