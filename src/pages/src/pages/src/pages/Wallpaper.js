import React from 'react';
import Wallpaper from '../components/Wallpaper';

const Wallpapers = () => {
  return (
    <div>
      <h1>Wallpapers</h1>
      <Wallpaper title="Abstract Art" image="path/to/wallpaper.jpg" downloadLink="https://download.link" />
    </div>
  );
};

export default Wallpapers;
