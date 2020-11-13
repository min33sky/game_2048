import React from 'react';
import cn from 'classnames';

function Tile({ id, value, x, y, isNew, isMerged }) {
  return (
    <div
      key={id}
      className={cn(`tile tile-${value} tile-position-${x}-${y}`, {
        'tile-merged': isMerged,
        'tile-new': isNew,
      })}
    >
      <div className='tile-inner'>{value}</div>
    </div>
  );
}

export default Tile;
