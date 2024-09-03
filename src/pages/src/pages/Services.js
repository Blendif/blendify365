import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ServiceCard service="Proofreading" description="Professional proofreading service" price="49.99" />
      <ServiceCard service="Content Writing" description="High-quality content writing service" price="99.99" />
    </div>
  );
};

export default Services;
