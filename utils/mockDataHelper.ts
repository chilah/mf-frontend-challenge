import { localStorageUtil } from '.';

export const createMockData = () => {
  localStorageUtil.saveData('frontend-challenge', [
    { time: 9, title: 'Task-1', id: 1 },
    { time: 10, title: 'Task-2', id: 2 },
    { time: 14, title: 'Task-3', id: 3 },
  ]);
};
