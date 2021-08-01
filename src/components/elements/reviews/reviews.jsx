import React, {useState} from 'react';
import classNames from 'classnames';
import styles from './reviews.module.scss';
import Button from '../button/button';
import { ButtonStyle } from '../../../const';
import Modal from '../modal/modal';
import { STARS_COUNT } from '../../../const';

const initialReviews = [
  {
    id: 1,
    name: 'Борис Иванов',
    advantages: 'мощность, внешний вид',
    disadvantages: 'Слабые тормозные колодки (пришлось заменить)',
    comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: 3,
    isRecommended: true,
    time: '1 минуту назад',
  },
  {
    id: 2,
    name: 'Марсель Исмагилов',
    advantages: 'Стиль, комфорт, управляемость',
    disadvantages: 'Дорогой ремонт и обслуживание',
    comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: 3,
    isRecommended: true,
    time: '1 минуту назад',
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  const handleSubmit = (data) => {
    toggleModal(false);
    setReviews(((prevState) => (
      [
        ...prevState,
        {
          ...data,
          id: prevState.length + 1,
          isRecommended: true,
          time: 'только что',
        },
      ]
    )));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h3 className='visually-hidden'>Отзывы</h3>
        <ul className={styles.list}>
          {reviews.map(({
            id,
            name,
            advantages,
            disadvantages,
            comment,
            rating,
            isRecommended,
            time}) => (
            <li
              key={id}
              className={styles.item}
            >
              <h4 className={styles.title}>{name}</h4>
              <div className={styles.block}>
                <strong className={classNames(styles.subtitle, styles.plus)}>
                  Достоинства
                </strong>
                <ul className={styles.features}>
                  <li>
                    {advantages}
                  </li>
                </ul>
              </div>
              <div className={styles.block}>
                <strong className={classNames(styles.subtitle, styles.minus)}>
                  Недостатки
                </strong>
                <ul className={styles.features}>
                  <li>
                    {disadvantages}
                  </li>
                </ul>
              </div>
              <div>
                <strong className={styles.comment_title}>Комментарий</strong>
                <p className={styles.comment} >
                  {comment}
                </p>
              </div>
              <div className={styles.rating_wrapper}>
                <div className={styles.rating}>
                  <span
                    className={styles.rating_active}
                    style={{width: `${100 * rating / STARS_COUNT}%`}}
                  />
                  <span className='visually-hidden'>Рейтинг {rating} из 5</span>
                </div>
                <p className={styles.recommend}>
                  {isRecommended ? 'Советует' : 'Не советует'}
                </p>
              </div>
              <div className={styles.date_wrapper}>
                <time dateTime={new Date().toISOString()}>{time}</time>
                <button className={styles.reply} type='button'>Ответить</button>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.button_wrapper}>
          <Button onClick={toggleModal} variant={ButtonStyle.OUTLINED}>Оставить отзыв</Button>
        </div>
      </div>
      {isModalOpen && <Modal onClose={toggleModal} onSubmit={handleSubmit}/>}
    </>
  );
}
