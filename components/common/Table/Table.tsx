'use client';

import React, { HTMLAttributes } from 'react';
import style from './Table.module.css';
import { combineClass } from '@/utils';

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
                      if (onDelete && data.id) {
                        onDelete(data.id);
                      }
                    }}
                  >
                    Delete
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
