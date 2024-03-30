import React from 'react';
import { DataType, Table } from '.';
import style from './TodoListTable.module.css';

type Props = {
  data: DataType[];
};

const TodoListTable: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <div className={style.todolist_container}>
      <p className={style.todolist_header}>Todo list</p>

      <Table
        headers={[
          { title: 'Task Title' },
          { title: 'Time Required(in Hrs)' },
          { title: 'Action' },
        ]}
        dataList={data}
      />
    </div>
  );
};

export default TodoListTable;
