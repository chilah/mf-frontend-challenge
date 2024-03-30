'use client';

import React from 'react';
import style from './Button.module.css';
import { combineClass } from '@/utils';

type Props = {
  label: string | React.ReactNode;
  onClick: () => void;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<Props> = (props) => {
  const { label, onClick, className = '', ...rest } = props;
  return (
    <button
      onClick={onClick}
      className={combineClass([style.button_container, className])}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
