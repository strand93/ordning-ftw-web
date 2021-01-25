import React from 'react';

const Footer = () => (
  <footer className="mx-auto p-10 md:px-32 text-white bg-gray-800">
    <div className="flex justify-around -mx-3">
      <div className="px-3">
        <h2 className="text-lg font-semibold">Sociala Medier</h2>
        <ul className="mt-2">
          <li>
            <a className="mt-2" href="https://www.instagram.com/ordningftw/">Instagram</a>
          </li>
          <li>
            <a className="mt-2" href="https://www.facebook.com/linn.larsson">Facebook</a>
          </li>
        </ul>
      </div>
      <div className="px-3">
        <h2 className="text-lg font-semibold">Kontakt</h2>
        <ul className="mt-2">
          <li>
            <p className="mt-2 font-light">Telefon: 1111-111 111</p>
          </li>
          <li>
            <p className="mt-2 font-light">Mail: ordning@ftw.se</p>
          </li>
        </ul>
    </div>
      {/*<div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
</div>*/}
    </div>
    <div className="contatiner justify-center mt-4">
      <hr className="border-gray-500"/>
      <p className=" mt-1 text-sm text-center font-mono text-gray-500">2020 - Website built with template developed by&nbsp;
      <a href="https://codebushi.com">Code Bushi</a></p>
    </div>
  </footer>
);

export default Footer;
