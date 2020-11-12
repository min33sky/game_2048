import React from 'react';

function Header() {
  return (
    <div>
      <div className='heading'>
        <h1 className='title'>2048</h1>
        <div className='scores-container'>
          <div className='score-container'>
            16<div className='score-addition'>+8</div>
          </div>
          <div className='best-container'>1456</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
