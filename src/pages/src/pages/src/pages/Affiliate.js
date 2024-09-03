import React from 'react';
import AffiliateProduct from '../components/AffiliateProduct';

const Affiliate = () => {
  return (
    <div>
      <h1>Affiliate Products</h1>
      <AffiliateProduct name="Diamond Necklace" price="299.99" image="path/to/jewelry.jpg" link="https://affiliate.link" />
    </div>
  );
};

export default Affiliate;
