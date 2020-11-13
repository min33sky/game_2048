import React, { useEffect, useState } from 'react';

function Header({ score, bestScore, updateScore }) {
  // const [prevScore, setPrevScore] = useState(score);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    function check() {
      return new Promise((resolve, reject) => {
        if (updateScore > 0) {
          resolve('update');
        } else {
          reject('failure');
        }
      });
    }

    const process = async () => {
      try {
        setUpdate(false);
        const result = await check();
        console.log('result', result);
        setUpdate(true);
      } catch (error) {
        setUpdate(false);
      }
    };

    process();
  }, [updateScore]);

  return (
    <div>
      <div className='heading'>
        <h1 className='title'>2048</h1>
        <div className='scores-container'>
          <div className='score-container'>
            {score}
            {update ? <div className='score-addition'>+{updateScore}</div> : ''}
          </div>
          <div className='best-container'>{bestScore}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
