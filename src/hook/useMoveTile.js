import { useEffect } from 'react';
import { addKeyObserver, removeKeyObserver } from './../util/keyboard';

export default function useMoveTile() {
  useEffect(() => {
    function up() {}
    function down() {}
    function left() {}
    function right() {}

    addKeyObserver('up', up);
    addKeyObserver('down', down);
    addKeyObserver('left', left);
    addKeyObserver('right', right);

    return () => {
      removeKeyObserver('up', up);
      removeKeyObserver('down', down);
      removeKeyObserver('left', left);
      removeKeyObserver('right', right);
    };
  });
}
