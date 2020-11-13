import React, { useEffect, useState } from 'react';

function Header({ score, bestScore }) {
  return (
    <div>
      <div className='heading'>
        <h1 className='title'>2048</h1>
        <div className='scores-container'>
          <div className='score-container'>
            {score}
            <div className='score-addition'>+10000</div>
          </div>
          <div className='best-container'>{bestScore}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
