import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './assets/components/Hero';
import Blog1 from './assets/components/Blog1';
import BlogDet from './assets/components/BlogDet';
import Blog3 from './assets/components/Blog3';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="blog" element={<Blog1 />} />
        <Route path="blogDet" element={<BlogDet />} />
        <Route path="blog3" element={<Blog3 />} />
      </Routes>
  );
}

export default App;

// App.js
// import React, { useState } from 'react';
// import Hero from './assets/components/Hero';
// import Blog1 from './assets/components/Blog1';

// function App() {
//   const [currentPage, setCurrentPage] = useState('hero'); // Initial page is 'hero'

//   // Function to switch between pages
//   const navigateToPage = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="App">
//       {currentPage === 'hero' && <Hero />}
//       {currentPage === 'blog1' && <Blog1 />}
      
//       {/* Example navigation buttons */}
//       <button onClick={() => navigateToPage('hero')}>Go to Hero Page</button>
//       <button onClick={() => navigateToPage('blog1')}>Go to Blog1 Page</button>
//     </div>
//   );
// }

// export default App;

