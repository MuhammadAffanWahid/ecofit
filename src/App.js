import React from 'react';
import Navbar from './NavBar';
import BlogSection from "./BlogSection";
import BestSellers from './BestSellers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogSection />
      <BestSellers />
      <div className='mt-20'></div>
    </div>
  );
}

export default App;