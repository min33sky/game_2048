import { useEffect } from 'react';
import { addKeyObserver } from './../util/keyboard';

export default function useMoveTile() {
  useEffect(() => {
    addKeyObserver('up', () => {
      console.log('up');
    });
    addKeyObserver('down', () => {
      console.log('down');
    });
    addKeyObserver('left', () => {
      // console.log('up');
    });
    addKeyObserver('right', () => {
      // console.log('up');
    });
  });
}
