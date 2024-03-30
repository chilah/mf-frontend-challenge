import { localStorageUtil } from '.';

export const createMockData = () => {
  localStorageUtil.saveData('frontend-challenge', [
    { time: 23, title: 'Task-1', id: 1 },
    { time: 2, title: 'Task-2', id: 2 },
    { time: 19, title: 'Task-3', id: 3 },
    { time: 5, title: 'Task-4', id: 4 },
    { time: 22, title: 'Task-5', id: 5 },
    { time: 17, title: 'Task-6', id: 6 },
    { time: 8, title: 'Task-7', id: 7 },
  ]);
};
