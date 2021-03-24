import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from '/Users/jeonyeohun/Desktop/React-Playground/04-react-styling-with-css-module/src/components/CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function CheckBox({ checked, children, ...rest }) {
  return (
    <div className={cx('checkBox')}>
      <label>
        <input type='checkbox' checked={checked} {...rest} />
        <div className={cx('icon')}>
          {checked ? (
            <MdCheckBox className={cx('checked')} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}
