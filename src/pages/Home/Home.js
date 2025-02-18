import React from 'react';
import Layout from '../../components/Layouts/Layout';
import '../../styles/Home.css';
import Section1 from './Section1';
import { Section2 } from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
      <Layout>
        {/* Home section Hero banner */}
        <Section1 />

        {/* Home About Section */}
        <Section2 />

        {/* Home Menu section */}
        <Section3/>

        {/* Promotion Section */}
        <Section4 />

        {/* Shop Section */}
        <Section5 />

        {/* Blog Section */}
        <Section6 />

        {/* Contact Section */}
        <Section7 />
      </Layout>
    </>
  )
}

export default Home;