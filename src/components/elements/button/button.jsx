import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import classNames from 'classnames';
import {ButtonStyle} from '../../../const';

export default function Button({
  children,
  style= ButtonStyle.DEFAULT,
  type = 'button',
  classStyle = '',
}) {
  return (
    <button
      type={type}
      className={classNames(
        styles.button,
        {[styles.default]: style === ButtonStyle.DEFAULT},
        {[styles.outlined]: style === ButtonStyle.OUTLINED},
        classStyle,
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.string,
  classStyle: PropTypes.string,
};
