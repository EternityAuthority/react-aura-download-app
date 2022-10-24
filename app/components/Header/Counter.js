import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [textUp, setTextUp] = useState('beauty');
  const [textDown, setTextDown] = useState('tech');
  const [textActive, setTextActive] = useState('fashion');
  let counter = 1;
  const [flagAnimate, setStartAnimate] = useState('central-bold');
  const changeStates = () => {
    if (counter === 1) {
      setTextUp('beauty');
      setTextDown('tech');
      setTextActive('fashion');
    } else if (counter === 2) {
      setTextUp('goods');
      setTextDown('beauty');
      setTextActive('tech');
    } else if (counter === 3) {
      setTextUp('fashion');
      setTextDown('goods');
      setTextActive('beauty');
    } else {
      setTextUp('tech');
      setTextDown('fashion');
      setTextActive('goods');
    }

    // console.log('Trigger called', counter);
  };
  const changeText = () => {
    setInterval(() => {
      changeStates();
      counter += 1;
      if (counter > 4) {
        counter = 1;
      }

      setStartAnimate('central-bold');
      setTimeout(() => {
        // setStartAnimate(
        //   'central-bold animate__animated animate__fadeOutDown animate__infinite infinite animate__slower',
        // );
        setStartAnimate(
          'central-bold',
        );
      }, 1500);
    }, 3000);
  };
  useEffect(() => {
    changeText();
  }, []);

  return (
    <div className="seller-section">
      <div className="seller-border">
        <span className="seller-drop-text">Drop your</span>
        <span className="linie-1 inactive-text ">{textUp}</span>
        <span className="linie-3 inactive-text">{textDown}</span>
        <span className={flagAnimate} onClick={changeText}>
          {textActive}
        </span>
      </div>
    </div>
  );
}
