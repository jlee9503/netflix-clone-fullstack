import React, { useRef, useState } from 'react';
import RowItem from './RowItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Row = () => {

  const rowList = useRef();
  const [slideNum, setSlideNum] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    let space = rowList.current.getBoundingClientRect().x - 50;
    setIsMoved(true);

    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      rowList.current.style.transform = `translateX(${(300 + space)}px)`;
      if (slideNum === 0) { setIsMoved(false); }
    }
    if (direction === "right" && slideNum < 6) {
      setSlideNum(slideNum + 1);
      rowList.current.style.transform = `translateX(${(-300 + space)}px)`;
    }
  }

  return (
    <div className='bg-black w-full'>
      <h1 className='font-bold pt-8 pb-4 text-white'>Continue to watch</h1>
      <div className='flex items-center relative'>
        <div className='slideArrowContainer left-0' onClick={() => handleClick("left")} style={{display: !isMoved && 'none'}}>
          <FontAwesomeIcon icon={faChevronLeft} className='slideArrow arrowLeft' />
        </div>
        <div className='flex relative ml-[50px] w-max translate-x-0 transition ease-in-out duration-[1500ms]' ref={rowList}>
          <RowItem index={0} />
          <RowItem index={1} />
          <RowItem index={2} />
          <RowItem index={3} />
          <RowItem index={4} />
          <RowItem index={5} />
          <RowItem index={6} />
          <RowItem index={7} />
          <RowItem index={8} />
          <RowItem index={9} />
          <RowItem index={10} />
          <RowItem index={11} />
        </div>
        <div className='slideArrowContainer right-0' onClick={() => handleClick("right")}>
          <FontAwesomeIcon icon={faChevronRight} className='slideArrow arrowRight' />
        </div>
      </div>
    </div>
  );
};

export default Row;
