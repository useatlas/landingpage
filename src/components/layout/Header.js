import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-3xl brand">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Atlas
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="text-gray-600 px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="text-gray-600 px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
        {/* <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink> */}
        {/* <AnchorLink className="text-gray-600 px-4"  href="https://atlasrent.typeform.com/landlords"> */}
          <a className="text-gray-600 px-4"   target="_blank" href="https://atlasrent.typeform.com/landlords">
          Landlords
          </a>
        {/* </AnchorLink> */}
      </div>
      <div className="hidden md:block">
        {/* https://atlasrent.typeform.com/rewardswaitlist */}
        <a href="#" className="text-white hover:text-white" data-tf-popup="oxc6Y5MX" data-tf-iframe-props="title=Atlas: Cash back each month you pay rent! " data-tf-medium="snippet" ><Button className="text-sm">Signup</Button></a> 
      </div>
    </div>
  </header>
);

export default Header;
