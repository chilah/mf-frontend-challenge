'use client';

import React from 'react';
import style from './Button.module.css';

type Props = {
  label: string | React.ReactNode;
  onClick: () => void;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<Props> = (props) => {
  const { label, onClick, ...rest } = props;
  return (
    <button onClick={onClick} className={style.button_container} {...rest}>
      {label}
    </button>
  );
};

export default Button;
