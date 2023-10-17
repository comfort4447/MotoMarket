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

const Hero = () => {
  return (
    <div>
      <Header />
    <section className=" px-7 bg-cover bg-left h-screen flex items-center " id='hero' style={{ backgroundImage: `url(${Background})` }}>
      <div className="container mx-auto text-white">
        <div className="max-w-2xl text-left p-4 md:p-0"> {/* Add padding for mobile (p-4), remove padding for larger screens (md:p-0) */}
          <h1 className="max-w-2xl text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-0">Building systems for safer road transit</h1>
          <div className="flex items-center">
            <img src={Bar} alt="Small Image" className="mr-5" />
            <p className="max-w-2xl text-lg md:text-xl lg:text-xl mb-8 mt-6">
              MotoMarket provides data, information, and intelligence technology and services to vehicle owners, road users, as well as administrators and enforcers of traffic policies
            </p>
          </div>

          <a href='#projects'><button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full focus:outline-none">View Project</button></a>
        </div>
      </div>
    </section>
    <About />
    <Service />
    <Project />
    <Blog />
    <Contact />
    <Footer />
    </div>
  );
}

export default Hero;



// import React from 'react';
// import Background from '../Images/Background.png';
// import Bar from '../Images/Bar.png';
// import MobileBackground from '../Images/mobile.png'; // Import the mobile background image
// import Header from './Header'; // Import your Header component

// const Hero = () => {
//   return (
//     <div>
//       {/* Include the Header component */}
//       <Header />

//       <section className="bg-cover bg-left h-screen relative" style={{ backgroundImage: `url(${Background})` }}>
//         {/* The rest of your Hero component code */}
//         <div className="container mx-auto text-white relative z-10">
//           <div className="max-w-2xl text-left p-4 md:p-0">
//             <h1 className="max-w-2xl text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Building systems for safer road transit</h1>
//             <div className="flex items-center">
//               <img src={Bar} alt="Small Image" className="mr-5" />
//               <p className="text-lg md:text-xl lg:text-xl mb-8 mt-8">
//                 MotoMarket provides data, information, and intelligence technology and services to vehicle owners, road users, as well as administrators and enforcers of traffic policies
//               </p>
//             </div>

//             <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full focus:outline-none">View Project</button>
//           </div>
//         </div>

//         {/* Mobile Background Image */}
//         <div className="md:hidden absolute inset-0" style={{ backgroundImage: `url(${MobileBackground})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
//           <div className="bg-black bg-opacity-75 h-screen w-full flex items-center justify-start px-4">
//             <div className="text-white z-10">
//               {/* Mobile content goes here */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Hero;
