/**
 * 랜덤 구간 숫자 생성 함수
 * @param {number} from 시작 숫자
 * @param {number} to 끝 숫자
 */
export function getRandomInteger(from, to) {
  return Math.floor(Math.random() * to + from);
}
