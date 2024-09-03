import React from 'react';
import Ebook from '../components/Ebook';
import ColoringPage from '../components/ColoringPage';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <Ebook title="Learn JavaScript" author="John Doe" price="19.99" image="path/to/ebook.jpg" />
      <ColoringPage title="Mandala Coloring Book" price="9.99" image="path/to/coloring.jpg" />
    </div>
  );
};

export default Shop;
