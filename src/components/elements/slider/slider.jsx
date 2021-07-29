import React, { useState } from 'react';
import classNames from 'classnames';
import Control from './control';
import styles from './slider.module.scss';
import { ControlDirection } from '../../../const';

const SLIDE_COUNT = 3;
const RADIX = 36;
const slides = new Array(SLIDE_COUNT).fill('')
  .map(() => Math.random().toString(RADIX));
const previews = new Array(SLIDE_COUNT).fill('')
  .map(() => Math.random().toString(RADIX));

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => setSlideIndex(((prevState) => prevState - 1));
  const handleNext = () => setSlideIndex(((prevState) => prevState + 1));

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {slides.map((slideKey, id) => (
          <li
            key={slideKey}
            className={classNames(
              styles.slide,
              {[styles.active]: id === slideIndex},
            )}
          >
            <picture>
              <source
                type='image/webp'
                srcSet={`${process.env.PUBLIC_URL}/images/slide${id}.webp 1x, ${process.env.PUBLIC_URL}/images/slide${id}@2x.webp 2x`}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/slide${id}.jpg`}
                srcSet={`${process.env.PUBLIC_URL}/images/slide${id}@2x.jpg 2x`}
                alt={`slide ${id}`}
                width={600}
                height={375}
              />
            </picture>
          </li>
        ))}
      </ul>
      <div className={styles.previews_wrapper}>
        <Control
          direction={ControlDirection.PREV}
          onClick={handlePrev}
          disabled={slideIndex === 0}
        />
        <ul className={styles.previews}>
          {previews.map((previewKey, id) => (
            <li key={previewKey}>
              <picture>
                <source
                  type='image/webp'
                  srcSet={`${process.env.PUBLIC_URL}/images/preview${id}.webp 1x, ${process.env.PUBLIC_URL}/images/preview${id}@2x.webp 2x`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/preview${id}.jpg`}
                  srcSet={`${process.env.PUBLIC_URL}/images/preview${id}@2x.jpg 2x`}
                  width={128}
                  height={80}
                  alt={`preview ${id}`}
                />
              </picture>
            </li>
          ))}
        </ul>
        <Control
          direction={ControlDirection.NEXT}
          onClick={handleNext}
          disabled={slideIndex === SLIDE_COUNT - 1}
        />
      </div>
    </div>
  );
}
