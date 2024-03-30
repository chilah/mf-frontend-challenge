'use client';

import React, { HTMLAttributes } from 'react';
import style from './Table.module.css';
import { combineClass } from '@/utils';
import { Button, Modal } from '..';

export type HeaderType = {
  title: string;
};

export type DataType = {
  title: string;
  time: number;
  id: number;
};

export type TableProps = {
  headers: HeaderType[];
  dataList: DataType[];
  onDelete?: (id: number) => void;
};

const Table: React.FC<TableProps> = (props) => {
  const { headers, dataList = [], onDelete } = props;

  const [selectedDeleteTask, setSelectedDeleteTask] =
    React.useState<DataType>();

  const onCloseModal = () => {
    setSelectedDeleteTask(undefined);
  };

  return (
    <div>
      <table className={style.table_container}>
        <tbody>
          <tr className={style.table_header_container}>
            {headers.map((header, index) => (
              <th
                key={`${header.title}_${index}`}
                className={style.table_header_label}
              >
                {header.title}
              </th>
            ))}
          </tr>

          {dataList.length > 0 &&
            dataList.map((data, index) => (
              <React.Fragment key={`${data}_${index}`}>
                <tr>
                  <td className={style.table_data_value}>{data.title}</td>
                  <td
                    className={combineClass([
                      style.table_data_value,
                      style.table_data_time,
                    ])}
                  >
                    {data.time}
                  </td>
                  <td
                    className={combineClass([
                      style.table_data_value,
                      style.table_data_delete,
                    ])}
                    onClick={() => {
                      setSelectedDeleteTask(data);
                    }}
                  >
                    Delete
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>

      <Modal open={!!selectedDeleteTask} onClose={onCloseModal}>
        <>
          <div>Confirm Delete</div>
          <div>Task: {selectedDeleteTask?.title}</div>
          <div className={style.table_modal_button_container}>
            <Button
              label="OK"
              onClick={() => {
                if (selectedDeleteTask && onDelete) {
                  onDelete(selectedDeleteTask.id);
                  onCloseModal();
                }
              }}
              className={style.table_modal_confirm_button}
            />
            <Button
              label="Cancel"
              onClick={onCloseModal}
              className={style.table_modal_cancel_button}
            />
          </div>
        </>
      </Modal>
    </div>
  );
};

export default Table;
