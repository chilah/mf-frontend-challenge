'use client';

import React from 'react';
import style from './Button.module.css';

type Props = {
  label: string | React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<Props> = (props) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick} className={style.button_container}>
      {label}
    </button>
  );
};

export default Button;
