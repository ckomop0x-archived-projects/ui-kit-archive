import { ChangeEventHandler } from 'react';

export interface InputProps {
  label?: string;
  disabled?: boolean;
  fontFamily?: string;
  placeholder?: string;
  paddding?: string;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: InputProps) => (
  <div>
    <label htmlFor={props.id ?? 'text'}>{props.label}</label>
    <input
      type="text"
      id={props.id ?? 'text'}
      disabled={props.disabled}
      placeholder={props.placeholder}
    />
  </div>
);
export default Input;
