import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline'

export enum ThemeButton {
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  OUTLINE_SUCCESS = 'outline_success',
  OTLINE_ERROR = 'outline_error'
}

type ButtonSize = 'm' | 'l' | 'xl'

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
  }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className, variant = 'outline', children, square, size = 'm', disabled, ...otherProps
    } = props;
    return (
        <button
            type="button"
            {...otherProps}
            disabled={disabled}
            className={
                classNames(
                    cls.Button,
                    { [cls.square]: square, [cls.disabled]: disabled },
                    [className, cls[variant], cls[size]],
                )
            }
        >
            {children}
        </button>
    );
});
