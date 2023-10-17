import React from 'react';
import bar from '../../assets/Images/Bar1.png';
import blog from '../../assets/Images/bg.png';
import Cards from './Cards';

const Blog = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${blog})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="bg-gray-50 py-16" id='blog' style={backgroundImageStyle}>
      <div className="container mx-auto text-center">
        <img src={bar} alt="Small Image" className="-mt-25 text-center mx-auto" />
        <h1 className="text-3xl text-white font-semibold mb-2">Moto Blog</h1>
        <p className="text-white text-center max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget semper ac dui lacus vitae auctor sit sem. Pretium sed nullam quis sit cras malesuada. Ac sapien sollicitudin donec tristique. Neque, ege
        </p>
      </div>
      <div className="container mx-auto text-center px-4">
        <Cards />
      </div>
    </div>
  );
};

export default Blog;
