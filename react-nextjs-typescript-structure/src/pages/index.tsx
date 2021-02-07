import React from 'react';
import Head from 'next/head';

import RocketseatLogo from '../assets/rocketseat.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <RocketseatLogo />
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default Home;
