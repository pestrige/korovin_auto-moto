import React from 'react';
import PropTypes from 'prop-types';
import styles from './slider.module.scss';
import classNames from 'classnames';
import { ControlDirection } from '../../../const';

export default function Control({onClick, direction, disabled}) {
  return (
    <button
      className={classNames(
        styles.control,
        {[styles.control__next]: direction === ControlDirection.NEXT},
      )}
      type='button'
      onClick={onClick}
      disabled={disabled}
    />
  );
}

Control.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
