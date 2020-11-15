import React, { useEffect, useRef } from 'react';
import ScoreAddtion from './ScoreAddtion';

function Header({ score, bestScore, updateScore }) {
  const prevScore = useRef(0);

  /**
   *? 이전 점수와 현재 점수가 다를 때만 업데이트 효과를 준다.
   */
  useEffect(() => {
    prevScore.current = score;
  });

  return (
    <div>
      <div className='heading'>
        <h1 className='title'>2048</h1>
        <div className='scores-container'>
          <div className='score-container'>
            {score}
            {prevScore.current !== score && <ScoreAddtion updateScore={updateScore} />}
          </div>
          <div className='best-container'>{bestScore}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
