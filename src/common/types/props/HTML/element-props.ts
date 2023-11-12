import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import {DetailedProps} from './detailed-props.ts';

export type InputProps = DetailedProps<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>;

export type ButtonProps = DetailedProps<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>;