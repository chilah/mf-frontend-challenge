import React from 'react';
import style from './Box.module.css';

type Props = {
  label: string;
  value: string | number;
};

const Box: React.FC<Props> = (props) => {
  const { label, value } = props;

  return (
    <div className={style.box_container}>
      <div>{label}</div>
      <div className={style.box_value}>{value}</div>
    </div>
  );
};

export default Box;
