import React from 'react';
import { DataType, Table } from '.';
import style from './TodoListTable.module.css';

type Props = {
  data: DataType[];
  onDelete: (id: number) => void;
};

const TodoListTable: React.FC<Props> = (props) => {
  const { data, onDelete } = props;

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
        onDelete={onDelete}
      />
    </div>
  );
};

export default TodoListTable;
