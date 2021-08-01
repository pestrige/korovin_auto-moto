import React from 'react';
import styles from './contacts.module.scss';
import CustomMap from './custom-map';

export default function Contacts() {
  return (
    <div className={styles.wrapper}>
      <h3 className='visually-hidden'>Контакты</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>Адрес</strong>
          <address>
            Санкт-Петербург,<br />
            набережная реки Карповки, дом 5
          </address>
        </li>
        <li className={styles.item}>
          <strong>Режим работы</strong><br/>
          <span>Ежедневно, с 10:00 до 21:00</span>
        </li>
        <li className={styles.item}>
          <strong>Телефон</strong><br/>
          <a href='tel:88003335599'>8 (800) 333-55-99</a>
        </li>
        <li className={styles.item}>
          <strong>E-mail</strong><br/>
          <a href='mailto:info@avto-moto.ru'>info@avto-moto.ru</a>
        </li>
      </ul>
      <div className={styles.map_wrapper}>
        <CustomMap />
      </div>
    </div>
  );
}
