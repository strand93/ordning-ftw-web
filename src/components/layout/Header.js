import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import Logo from '../../images/logo.png'

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          {/* <LogoIcon /> */}
          <img src={Logo} alt="logo"/>
        </div>
        <p className="text-yellow-700">Ordning FTW</p>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-8" href="#features">
          Om mig
        </AnchorLink>
        <AnchorLink className="px-8" href="#services">
          Tjänster
        </AnchorLink>
        <AnchorLink className="px-8" href="#stats">
          Kontakt
        </AnchorLink>
        <AnchorLink className="px-8" href="#testimonials">
          Omdömen
        </AnchorLink>
      </div>
      {/*
      <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div>
    */}
    </div>
  </header>
);

export default Header;
