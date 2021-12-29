import React from 'react';
import Footer from '../../shared/components/Footer/Footer';
import Navbar from '../../shared/components/Navbar/Navbar';
import About from './About';
import Contact from './Contact';
import Packs from './Packs';
import Roadmap from './Roadmap';
import Team from './Team';

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Packs />

      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
