import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import classNames from 'classnames';
import {ButtonStyle} from '../../../const';
import {Link} from 'react-router-dom';

export default function Button({
  children,
  variant= ButtonStyle.DEFAULT,
  type = 'button',
  classStyle = '',
  isLink = false,
  path = '/',
  onClick }) {

  return isLink
    ? (
      <Link
        to={path}
        className={classNames(
          styles.button,
          {[styles.default]: variant === ButtonStyle.DEFAULT},
          {[styles.outlined]: variant === ButtonStyle.OUTLINED},
          classStyle,
        )}
      >
        {children}
      </Link>
    )
    : (
      <button
        type={type}
        className={classNames(
          styles.button,
          {[styles.default]: variant === ButtonStyle.DEFAULT},
          {[styles.outlined]: variant === ButtonStyle.OUTLINED},
          classStyle,
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  classStyle: PropTypes.string,
  path: PropTypes.string,
  isLink: PropTypes.bool,
  onClick: PropTypes.func,
};
