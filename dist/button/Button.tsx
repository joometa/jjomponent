import React, { forwardRef } from 'react';
import { GLO } from '../config';
import { ButtonProps } from './types';

function CButton(props: ButtonProps, ref: any) {
  const {
    className = '',
    theme = 'primary',
    size = 'xs',
    dash = false,
    href = '',
    loading,
    leftIcon,
    rightIcon,
    children,
    ...otherProps
  } = props;

  return (
    <>
      {href ? (
        <a
          href={href}
          data-theme={theme}
          data-size={size}
          data-dash={dash}
          className={`${GLO}-buttons ${className}`}
          ref={ref}
          {...otherProps}
        >
          {leftIcon && <i className="icon left">{leftIcon}</i>}
          <span className="txt">{children}</span>
          {rightIcon && <i className="icon right">{rightIcon}</i>}
        </a>
      ) : (
        <button
          data-theme={theme}
          data-size={size}
          data-dash={dash}
          className={`${GLO}-buttons ${className}`}
          ref={ref}
          {...otherProps}
        >
          {leftIcon && <i className="icon left">{leftIcon}</i>}
          <span className="txt">{children}</span>
          {rightIcon && <i className="icon right">{rightIcon}</i>}
        </button>
      )}
    </>
  );
}

export const Button = forwardRef(CButton);
Button.displayName = 'Button';
Button.defaultProps = {
  theme: 'primary',
  size: 'xs',
  dash: false,
  className: '',
};
