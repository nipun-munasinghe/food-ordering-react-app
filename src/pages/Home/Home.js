import React from 'react';
import Layout from '../../components/Layouts/Layout';
import '../../styles/Home.css';
import Section1 from './Section1';
import { Section2 } from './Section2';
import Section3 from './Section3';

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
      </Layout>
    </>
  )
}

export default Home;