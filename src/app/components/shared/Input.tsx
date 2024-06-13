import { InputHTMLAttributes } from 'react';
import styles from '@/app/components/shared/input.module.css';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input(props: IInputProps) {
  return (
    <div className={styles.inputContainer} style={props.style}>
      <label> {props.label}</label>
      <input {...props} />
    </div>
  );
}
