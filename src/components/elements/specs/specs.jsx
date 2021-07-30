import React from 'react';
import styles from './specs.module.scss';

const specs = [
  {id: 1, term: 'Трансмиссия', def: 'Роботизированная'},
  {id: 2, term: 'Мощность двигателя, л.с.', def: '249'},
  {id: 3, term: 'Тип двигателя', def: 'Бензиновый'},
  {id: 4, term: 'Привод', def: 'Полный'},
  {id: 5, term: 'Объем двигателя, л', def: '2.4'},
  {id: 6, term: 'Макс. крутящий момент', def: '370/4500'},
  {id: 7, term: 'Количество цилиндров', def: '4'},
];

export default function Specs() {

  return (
    <dl className={styles.list}>
      {specs.map(({id, term, def}) => (
        <React.Fragment key={id}>
          <dt key={term.replace(/\s/g, '') + id} className={styles.term}>
            {term}
          </dt>
          <dd key={def.replace(/\s/g, '') + id} className={styles.def}>
            {def}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
