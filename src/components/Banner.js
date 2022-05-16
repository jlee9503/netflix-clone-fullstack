import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] bg-[url('https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png')] z-0">
      <div className='absolute bottom-[25%] left-[5%] top-0 flex justify-end flex-col sm:w-[60%] md:w-[50%] lg:w-[40%]'>
        <h1 className='sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white mb-4'>Movie Name</h1>
        <div className='text-white sm:text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]'>
          Searching for a fresh start, a nurse practitioner moves from LA to a remote nothern California town and is surprised by what -- and who -- she finds.
        </div>
        <div className='mt-3'>
          <button className='bg-white bg-opacity-70 hover:bg-opacity-100 text-black mr-4 px-8 banner-btns'>
            <FontAwesomeIcon icon={faPlay} className='mr-3' />Play
          </button>
          <button className='bg-gray-400 bg-opacity-70 hover:bg-opacity-100 text-white px-4 banner-btns'>
            <FontAwesomeIcon icon={faInfoCircle} className='mr-3' />More Info
          </button>
        </div>
      </div>

      <div className='w-full h-12 bg-gradient-to-b from-[rgba(82,81,81,0.1)] to-black absolute bottom-0'></div>
    </div>
  );
};

export default Banner;
