import React from 'react';
import GlassmorphismCard from '../components/GlassmorphismCard';
import NeumorphismButton from '../components/NeumorphismButton';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Blendify365</h1>
      <GlassmorphismCard title="Welcome" content="Experience a blend of creativity and productivity." />
      <NeumorphismButton label="Explore More" />
    </div>
  );
};

export default Home;
