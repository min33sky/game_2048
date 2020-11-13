import { useEffect } from 'react';
import { makeTile, moveTile } from '../util/tile';
import { addKeyObserver, removeKeyObserver } from './../util/keyboard';

/**
 * 타일을 움직이는 훅
 * @param {array} tileList 타일 리스트
 * @param {function} setTileList 상태 변경 핸들러
 */
export default function useMoveTile(tileList, setTileList, setScore) {
  useEffect(() => {
    function moveAndAdd({ x, y }) {
      const newTileList = moveTile({ tileList, x, y });
      // 점수 변경
      const score = newTileList.reduce((acc, item) => (item.isMerged ? acc + item.value : acc), 0);
      setScore((val) => val + score);
      const newTile = makeTile(newTileList);
      newTile.isNew = true;
      newTileList.push(newTile);
      setTileList(newTileList);
    }

    function moveUp() {
      moveAndAdd({ x: 0, y: -1 });
    }
    function moveDown() {
      moveAndAdd({ x: 0, y: 1 });
    }
    function moveLeft() {
      moveAndAdd({ x: -1, y: 0 });
    }
    function moveRight() {
      moveAndAdd({ x: 1, y: 0 });
    }

    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveLeft);
    addKeyObserver('right', moveRight);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveLeft);
      removeKeyObserver('right', moveRight);
    };
  });
}
