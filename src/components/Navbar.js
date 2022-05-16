import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [openAccountSetting, setOpenAccountSetting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(window.screenY);

  const toggleAccountSetting = () => { setOpenAccountSetting(!openAccountSetting) };
  const navbarTransition = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarTransition);
    return () => window.addEventListener('scroll', navbarTransition);
  }, []);

  return (
    <div className={'navbar-container flex justify-between items-center sm:h-10 md:h-16 px-5% fixed top-0 w-full shadow-sm text-white z-50 ' + (isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-black-300')}>
      <div className='flex items-center'>
        <Link to='/'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='logo-img' className='w-24 h-8 mr-6' />
        </Link>
        <nav className='primary-navbar'>
          {[
            ['Home', '/'],
            ['TV Shows', '/tvshows'],
            ['Movies', '/movies'],
            ['New & Popular', '/latest'],
            ['My List', '/mylist']
          ].map(([title, url], idx) => (
            <Link to={url} key={idx} className='ml-5'>{ title }</Link>
          ))}
        </nav>
      </div>

      <div className='flex items-center relative'>
        <div className='secondary-navbar flex items-center'>
          <FontAwesomeIcon icon={faSearch} className='mr-5 cursor-pointer' size='lg' />
          <FontAwesomeIcon icon={faBell} className='mr-5 cursor-pointer' size='lg' />
          <h3 className='mr-5 cursor-pointer'>DVD</h3>
          <div className='flex items-center cursor-pointer group' onMouseEnter={toggleAccountSetting} onMouseLeave={toggleAccountSetting}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='profile-icon' className='w-8 h-8 rounded' />
            <FontAwesomeIcon icon={faCaretDown} size='lg' className='ml-1 transition ease-in-out duration-200 group-hover:-rotate-180' />
            <ul className={'account-setting ' + (openAccountSetting ? 'block' : 'hidden')}>
              <FontAwesomeIcon icon={faCaretUp} size='lg' className='absolute -top-[14px] left-[5.5rem] mb-1' color='#d3d3d3' />
              {
                ['Manage Profile', 'Account', 'Help Center', 'Sign out of Netflix'].map((title, idx) => (
                  <li className='hover:underline' key={idx}>{ title }</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
