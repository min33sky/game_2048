import { MAX_POS } from '../constants';
import { getRandomInteger } from './number';

/**
import { getRandomInteger } from './number';
import { MAX_POS } from './../constants';
 * 타일 리스트 초기화 함수
 */
export function getInitialTileList() {
  const tileList = [];
  const tile1 = makeTile(tileList);
  tileList.push(tile1);
  const tile2 = makeTile(tileList);
  tileList.push(tile2);
  return tileList;
}

/**
 * 좌표 충돌 체크
 * @param {*} tileList
 * @param {*} tile
 */
function checkCollision(tileList, tile) {
  return tileList.some((item) => item.x === tile.x && item.y === tile.y);
}

let tileId = 0;

/**
 * 타일 생성 함수
 * @param {*} tileList
 */
export function makeTile(tileList) {
  let tile;
  while (!tile || checkCollision(tileList, tile)) {
    tile = {
      id: tileId++,
      x: getRandomInteger(1, MAX_POS),
      y: getRandomInteger(1, MAX_POS),
      value: 2,
    };
  }
  return tile;
}
