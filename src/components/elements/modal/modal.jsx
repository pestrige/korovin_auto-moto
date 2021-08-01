import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './modal.module.scss';
import { STARS_COUNT } from '../../../const';
import { ReactComponent as Star } from './star.svg';
import Button from '../button/button';

const InputName = {
  NAME: 'name',
  ADVANTAGES: 'advantages',
  DISADVANTAGES: 'disadvantages',
  RATING: 'rating',
  COMMENT: 'comment',
};

export default function Modal({onClose, onSubmit}) {
  const nameRef = useRef();
  const storage = localStorage.getItem('form');
  const initState = storage ? JSON.parse(storage) : {
    [InputName.NAME]: '',
    [InputName.ADVANTAGES]: '',
    [InputName.DISADVANTAGES]: '',
    [InputName.RATING]: null,
    [InputName.COMMENT]: '',
  };

  const [form, setForm] = useState(initState);
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleKeyDown = (evt) => {
    if (evt.code === 'Escape' || evt.code === 'Esc') {
      onClose();
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = form[InputName.NAME];
    const advantages = form[InputName.ADVANTAGES];
    const disadvantages = form[InputName.DISADVANTAGES];
    const comment = form[InputName.COMMENT];
    const rating = +form[InputName.RATING] || 0;

    if (!name) {
      setNameError(true);
      return;
    }
    if (!comment) {
      setCommentError(true);
      return;
    }

    setNameError(false);
    setCommentError(false);
    onSubmit({
      name,
      advantages,
      disadvantages,
      comment,
      rating,
    });
    localStorage.setItem('form', '');
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  useEffect(() => localStorage.setItem('form', JSON.stringify(form)), [form]);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'visible');
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose} onKeyDown={handleKeyDown}>
      <div className={styles.wrapper} onClick={(evt) => evt.stopPropagation()}>
        <h2 className={styles.title}>
          Оставить отзыв
        </h2>
        <form
          className={styles.form}
          action='#'
          method='POST'
          onSubmit={handleSubmit}
        >
          <label className={classNames(styles.label, styles.label__required)}>
            <input className={classNames(
              styles.input,
              {[styles.input__error]: nameError},
            )}
            name={InputName.NAME}
            type='text'
            placeholder='Имя'
            autoComplete='off'
            value={form[InputName.NAME]}
            onChange={handleChange}
            onFocus={() => {
              if (nameError) {
                setNameError(false);
              }
            }}
            ref={nameRef}
            />
            {nameError && <span className={styles.error}>Пожалуйста, заполните поле</span>}
          </label>
          <label>
            <input className={styles.input}
              name={InputName.ADVANTAGES}
              type='text'
              placeholder='Достоинства'
              autoComplete='off'
              value={form[InputName.ADVANTAGES]}
              onChange={handleChange}
            />
          </label>
          <label>
            <input className={styles.input}
              name={InputName.DISADVANTAGES}
              type='text'
              placeholder='Недостатки'
              autoComplete='off'
              value={form[InputName.DISADVANTAGES]}
              onChange={handleChange}
            />
          </label>
          <div className={styles.rating_wrapper}>
            <span className={styles.rating_title}>Оцените товар:</span>
            <div className={styles.rating}>
              {
                new Array(STARS_COUNT).fill('')
                  .map((_, id) => {
                    const counter = STARS_COUNT - id;
                    return (
                      <React.Fragment key={`star-${counter}`}>
                        <input
                          id={`${counter}-stars`}
                          value={counter}
                          checked={counter === +form[InputName.RATING]}
                          onChange={handleChange}
                          className={`${styles.radio} visually-hidden`}
                          name={InputName.RATING}
                          type='radio'
                        />
                        <label
                          htmlFor={`${counter}-stars`}
                          className={styles.rating_label}
                        >
                          <Star className={styles.star} width={27} height={28}/>
                        </label>
                      </React.Fragment>
                    );
                  })
              }
            </div>
          </div>
          <label className={classNames(styles.review, styles.label__required)}>
            {commentError && <span className={styles.error}>Пожалуйста, заполните поле</span>}
            <textarea
              className={classNames(
                styles.review_text,
                {[styles.review_text__error]: commentError},
              )}
              name={InputName.COMMENT}
              placeholder='Комментарий'
              onFocus={() => {
                if (commentError) {
                  setCommentError(false);
                }
              }}
              value={form[InputName.COMMENT]}
              onChange={handleChange}
            />
          </label>
          <Button
            type='submit'
            classStyle={styles.submit}
          >
            Оставить отзыв
          </Button>
        </form>
        <button
          onClick={onClose}
          className={styles.close}
          type='button'
          aria-label='Закрыть'
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
