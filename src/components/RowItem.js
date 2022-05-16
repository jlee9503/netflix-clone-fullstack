import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const RowItem = ({ index }) => {

  const [isHovered, setIsHovered] = useState(false);
  const addHoverEffect = () => {
    setTimeout(() => {
      setIsHovered(true)
    }, 500);
  }
  const removeHoverEffect = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  }

  return (
    <div className='rowItem group bg-black text-white rounded' onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect} style={{ left: isHovered && (index * 350) + index * 5 }}>
      {!isHovered && (<img src='https://www.cinepremiere.com.mx/wp-content/uploads/2019/11/Better-Call-Saul-temporada-cinco-1024x559.jpg' alt='poster' className='w-full  object-cover' />)}
      
      {isHovered && (
        <>
          <ReactPlayer url="https://www.youtube.com/embed/E7wJTI-1dvQ" muted={true} playing={true} width="100%" height="200px" />
          <div className='p-4'>
            <div className='toolBtns text-white duration-500 delay-500 mb-3'>
              <FontAwesomeIcon icon={faPlay} className="border-[2px] border-white border-solid rounded-[50%] px-1 py-2 text-4xl mr-2" style={{width: '36px'}} />
              <FontAwesomeIcon icon={faPlus} className="border-2 border-white border-solid rounded-[50%] px-1 py-2 text-4xl mr-2" style={{width: '36px'}} />
              <FontAwesomeIcon icon={faThumbsUp} className="border-[2px] border-white border-solid rounded-[50%] px-1 py-2 text-4xl mr-2" />
              <FontAwesomeIcon icon={faThumbsDown} className="border-[2px] border-white border-solid rounded-[50%] px-1 py-2 text-4xl" />
            </div>
            <div className='itemInfo duration-500 delay-500'>
              <span className='border-gray-500 border-solid border-2 px-[2px] mr-2'>R</span>
              <span>2010</span>
            </div>
            <div className='itemDesc duration-500 delay-500'>
              this is a movie description
            </div>
            <div className='itemGenre duration-500 delay-500'>
              Action
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RowItem;
