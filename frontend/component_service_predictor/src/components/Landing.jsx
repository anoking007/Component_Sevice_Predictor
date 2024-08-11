// src/components/Hub.jsx
import React from 'react';
import SlideShow from './landing/SlideShow';
import SectionHeading from './landing/Heading';
import {FeaturesSectionDemo } from './landing/Features';
import CardGrid from './landing/CardGrid';
import ContactInfo from './landing/ContactInfo';
import ContactForm from './landing/ContactForm';
import Footer from './Footer';

const Landing = () => {
  const images = [
    'articulated.png',
    'asphalt_paver.png',
    'backhoe_loader.jpg',
    'dozer.jpg',
  ];

  const text = [
    'First Image Caption',
    'Second Image Caption',
    'Third Image Caption',
    'Fourth Image Caption',
  ];

  return (
    <div>
      <div className="flex justify-center items-center">
        <SlideShow images={images} text={text} interval={5000} />
      </div>
      <br />
      <SectionHeading title="Our Features" />
      <FeaturesSectionDemo />
      <SectionHeading title="Why Us?" />
      <CardGrid />
      <SectionHeading title="Contact Info" />
      <ContactInfo />
      <SectionHeading title="Get In Touch" />
      <ContactForm />
    </div>
  );
};

export default Landing;
