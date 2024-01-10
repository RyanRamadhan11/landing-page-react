import React from 'react';
import Navbar from '../components/Navbar'; // Sesuaikan path sesuai dengan struktur proyek Anda
import Hero from '../components/Hero';
import Testimoni from '../components/Testimoni';
import Card from '../components/Card';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Service from '../components/Service';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Testimoni/>
      <Card/>
      <Service/>
      <Accordion />
      <Footer/>
    </div>
  );
}

export default Home;
