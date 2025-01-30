import React from 'react';
import Layout from '../../components/Layouts/Layout';
import '../../styles/Home.css';
import Section1 from './Section1';

function Home() {
  return (
    <>
      <Layout>
        {/* Home section Hero banner */}
        <Section1 />
      </Layout>
    </>
  )
}

export default Home