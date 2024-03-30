'use client';

import React from 'react';
import {
  Button,
  DataType,
  DaysBox,
  HoursBox,
  Input,
  TaskBox,
  TaskForm,
  TodoListTable,
} from '@/components/common';
import style from './page.module.css';
import { createMockData, localStorageUtil } from '@/utils';

const Page: React.FC = () => {
  const [todolist, setTodoList] = React.useState<DataType[]>([]);

  const onAddTask = (data: DataType) => {
    setTodoList([...todolist, { ...data }]);
  };

  const onDeleteTask = (id: number) => {
    setTodoList(todolist.filter((task) => task.id !== id));
  };

  const calculdateTasks = React.useMemo(() => {
    return todolist.length;
  }, [todolist]);

  const calculateHours = React.useMemo(() => {
    return todolist.reduce((total: number, currentValue: DataType) => {
      return currentValue.time + total;
    }, 0);
  }, [todolist]);

  const calculateDays = React.useMemo(() => {
    return todolist.reduce((total: number, currentValue: DataType) => {
      return currentValue.time / 8 + total;
    }, 0);
  }, [todolist]);

  React.useEffect(() => {
    const data = localStorageUtil.getData('frontend-challenge') as DataType[];

    if (!data) {
      createMockData();
    } else {
      setTodoList(data);
    }
  }, []);

  return (
    <div className="page-container">
      <div className={style.group_page_container}>
        <p>Task Management App</p>

        <div className={style.group_box_container}>
          <TaskBox tasks={calculdateTasks} />
          <DaysBox days={calculateDays} />
          <HoursBox hours={calculateHours} />
        </div>

        <div className={style.group_form_container}>
          <TaskForm onAddTask={onAddTask} />
        </div>

        <div>
          <TodoListTable data={todolist} onDelete={onDeleteTask} />
        </div>
      </div>
    </div>
  );
};

export default Page;
