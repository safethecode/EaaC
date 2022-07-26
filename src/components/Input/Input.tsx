import { InputHTMLAttributes, memo, useCallback } from 'react';

import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = memo(
  ({ className, type, placeholder, onChange, ...rest }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
      },
      [onChange],
    );
    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={cx('input', className)}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
Input.defaultProps = {
  type: 'text',
  placeholder: 'e.g. 목표 3개 작성하기',
};
