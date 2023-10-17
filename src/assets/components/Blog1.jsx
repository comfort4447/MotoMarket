import React from 'react';
import frsc from '../Images/frsc.png';
import Footer from './Footer';
import Header1 from './Header1';

const Blog1 = () => {
  const blogDescription = 'Photo by Nupo Deyon Daniel on Unsplash';
  const blogContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla turpis eu felis luctus. Blandit aliquam eu tortor sed at leo dictum magna. Blandit venenatis, ac dignissim eu. Hendrerit aliquam vulputate sit etiam. Eu, maecenas adipiscing lectus ut enim convallis viverra ornare sit.';
  const blogContent1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla turpis eu felis luctus. Blandit aliquam eu tortor sed at leo dictum magna. Blandit venenatis, ac dignissim eu. Hendrerit aliquam vulputate sit etiam. Eu, maecenas adipiscing lectus ut enim convallis viverra ornare sit.';
  const blogContent2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla turpis eu felis luctus. Blandit aliquam eu tortor sed at leo dictum magna. Blandit venenatis, ac dignissim eu. Hendrerit aliquam vulputate sit etiam. Eu, maecenas adipiscing lectus ut enim convallis viverra ornare sit.';
  const blockContent3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at mi molestie nunc cursus sit. Magna nec odio feugiat amet. Ultrices sapien arcu sit vulputate pharetra sit sit dui consequat. Ultricies egestas eget neque, viverra et lectus pellentesque ornare. Condimentum consequat posuere nunc, risus. Quam nisl faucibus pellentesque nunc, sem.Fames massa cursus at vel elementum neque. Ut eget tellus nec diam arcu felis, est sit pharetra. Justo aliquam posuere sapien, sit et vitae ultricies. Volutpat amet amet ultrices in duis ullamcorper feugiat vitae purus. At vel odio viverra fringilla. Diam neque, tempor, neque, amet, augue felis diam diam. Pellentesque integer urna lorem.'

  return (
    <div>
      <Header1 />
      <div className="flex flex-col p-24">
        <h1 className="text-3xl mt-4 mb-4 text-center">Motohub, NIA and FRSC Launch</h1>
        <img src={frsc} alt="Blog Image" className="mb-4" style={{ maxHeight: '500px' }} />
        <p className="text-center mb-8 text-gray-500">{blogDescription}</p>
        <p className="text-left mb-4 text-gray-500">{blogContent}</p>
        <br></br>
        <p className="text-left mb-4 text-gray-500">{blogContent1}</p>
        <br></br>
        <p className="text-left mb-4 text-gray-500">{blogContent2}</p>
        <br></br>
        <p className="text-left mb-4 text-gray-500">{blockContent3}</p>
        <div className="text-left text-gray-500">
          <h2 className="text-2xl mt-4 mb-2 text-black">Written By</h2>
          <p >Raqeebah Buhari</p>
          <p>August 23, 2021</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog1;
