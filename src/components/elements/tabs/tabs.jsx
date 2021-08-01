import React, {useState} from 'react';
import styles from './tabs.module.scss';
import classNames from 'classnames';
import Specs from '../specs/specs';
import Contacts from '../contacts/contacts';
import Reviews from '../reviews/reviews';

const RADIX = 36;
const TabName = {
  SPECS: 'specs',
  REVIEWS: 'reviews',
  CONTACTS: 'contacts',
};
const TABS = [
  {
    key: Math.random().toString(RADIX),
    name: TabName.SPECS,
    title: 'Характеристики',
  },
  {
    key: Math.random().toString(RADIX),
    name: TabName.REVIEWS,
    title: 'Отзывы',
  },
  {
    key: Math.random().toString(RADIX),
    name: TabName.CONTACTS,
    title: 'Контакты',
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(TabName.SPECS);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {TABS.map(({key, title, name}) => (
          <li
            key={key}
          >
            <button
              type='button'
              className={classNames(
                styles.tab,
                {[styles.active_tab]: name === activeTab},
              )}
              onClick={() => setActiveTab(name)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.tab_content}>
        {activeTab === TabName.SPECS && <div><Specs /></div>}
        {activeTab === TabName.REVIEWS && <div><Reviews /></div>}
        {activeTab === TabName.CONTACTS && <div><Contacts /></div>}
      </div>
    </div>
  );
}
