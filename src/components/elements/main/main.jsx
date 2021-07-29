import React from 'react';
import styles from './main.module.scss';
import Card from '../card/card';
import Tabs from '../tabs/tabs';

export default function Main() {
  return (
    <main>
      <h1 className='visually-hidden'>Карточка авто Марпех 11</h1>
      <section className={styles.card_wrapper}>
        <div className='container'>
          <Card />
        </div>
      </section>
      <section className={styles.specs_wrapper}>
        <div className='container'>
          <Tabs />
        </div>
      </section>
    </main>
  );
}
