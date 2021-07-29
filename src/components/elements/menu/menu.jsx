import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {MenuType} from '../../../const';

const HEADER_MENU_ITEMS = [
  {name: 'Автомобили', link: '/auto'},
  {name: 'Контакты', link: '/contacts'},
  {name: 'Услуги', link: '/services'},
  {name: 'Вакансии', link: '/job'},
];

const FOOTER_MENU_ITEMS = [
  {name: 'Корпоративным клиентам', link: '/corporate'},
  {name: 'Клиентам', link: '/clients'},
  {name: 'Аренда авто', link: '/rent'},
  {name: 'Каршеринг', link: '/share'},
  {name: 'Как продать авто', link: '/sell'},
  {name: 'Trade-in', link: '/trade-in'},
  {name: 'Test drive', link: '/test-drive'},
];

const getMenuItems = (type) => type === MenuType.HEADER ? HEADER_MENU_ITEMS : FOOTER_MENU_ITEMS;

export default function Menu({type = MenuType.HEADER}) {
  return (
    <ul
      className={classNames(
        styles.list,
        {[styles.list__footer]: type === MenuType.FOOTER},
      )}
    >
      {getMenuItems(type).map(({name, link}) => (
        <li
          key={name}
          className={styles.item}
        >
          <Link
            to={link}
            className={styles.link}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

Menu.propTypes = {
  type: PropTypes.string,
};
