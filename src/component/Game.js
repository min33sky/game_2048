import React, { useState } from 'react';
import { times } from 'lodash';
import { MAX_POS } from '../constants';
import { getInitialTileList } from '../util/tile';
import useMoveTile from './../hook/useMoveTile';
import Tile from './Tile';

function Game({ setScore, setUpdateScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);

  useMoveTile(tileList, setTileList, setScore, setUpdateScore);

  return (
    <div className='game-container'>
      <div className='grid-container'>
        {times(MAX_POS, (idx) => (
          <div key={idx} className='grid-row'>
            {times(MAX_POS, (idx2) => (
              <div key={idx2} className='grid-cell'></div>
            ))}
          </div>
        ))}
      </div>

      <div className='tile-container'>
        {tileList.map((item) => (
          <Tile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Game;
