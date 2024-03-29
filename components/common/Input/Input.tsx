import React from 'react';
import style from './Input.module.css';

type Props = {
  label?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props: Props) => {
  const { label, ...rest } = props;
  return (
    <div>
      {label ? <p className={style.input_label}>{label}</p> : null}
      <input className={style.input_container} {...rest} />
    </div>
  );
};

export default Input;
