import React from 'react';
import styles from './card.module.scss';
import Button from '../button/button';
import { ButtonStyle } from '../../../const';
import Slider from '../slider/slider';

const FEATURES = [
  {id: 'feature-1', name: 'type', title: 'бензин'},
  {id: 'feature-2', name: 'gear', title: 'механика'},
  {id: 'feature-3', name: 'power', title: '100 л.с.'},
  {id: 'feature-4', name: 'volume', title: '1.4 л'},
];

export default function Card() {
  return (
    <article className={styles.article}>
      <div className={styles.specs}>
        <h3 className={styles.title}>Марпех 11</h3>
        <ul className={styles.features}>
          {FEATURES.map(({id, title}) => (
            <li
              key={id}
              className={`${styles.feature}`}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className={styles.price}>
          <div className={styles.new_price}>
            <span>2 300 000</span>
          </div>
          <div className={styles.old_price}>
            <span>2 400 000</span>
          </div>
        </div>
        <div className={styles.actions}>
          <Button isLink path='/order' classStyle={styles.first_button}>
            Оставить заявку
          </Button>
          <Button isLink path='/credit' variant={ButtonStyle.OUTLINED}>
            В КРЕДИТ ОТ 11 000 ₽
          </Button>
        </div>
      </div>
      <Slider />
    </article>
  );
}
