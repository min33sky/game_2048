import { useEffect, useState } from 'react';

export function useLocalStorageNumber(key, initValue) {
  const [value, setValue] = useState(initValue);

  // 로컬 스토리지에서 베스트 스코어를 가져온다.
  useEffect(() => {
    const valueStr = window.localStorage.getItem(key);
    if (valueStr) {
      setValue(Number(valueStr));
    }
  }, [key]);

  // 베스트 스코어를 업데이트 한다.
  useEffect(() => {
    const prev = window.localStorage.getItem(key);
    const next = String(value);

    if (prev !== next) {
      window.localStorage.setItem(key, next);
    }
  }, [key, value]);

  return [value, setValue];
}
