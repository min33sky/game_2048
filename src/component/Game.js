import React, { useState } from 'react';
import { times } from 'lodash';
import { MAX_POS } from '../constants';
import { getInitialTileList } from '../util/tile';
import useMoveTile from './../hook/useMoveTile';

function Game() {
  const [tileList, setTileList] = useState(getInitialTileList);

  useMoveTile();

  return (
    <div className='game-container'>
      <div className='grid-container'>
        {times(MAX_POS, () => (
          <div className='grid-row'>
            {times(MAX_POS, () => (
              <div className='grid-cell'></div>
            ))}
          </div>
        ))}
      </div>

      <div className='tile-container'>
        {tileList.map((item) => (
          <div className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}>
            <div className='tile-inner'>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;