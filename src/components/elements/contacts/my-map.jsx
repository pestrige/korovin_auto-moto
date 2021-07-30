import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './contacts.module.scss';
import markerIcon from './marker.svg';

const COORDINATES = [59.967539, 30.319959];
const MARKER_COORDINATES = [59.968274, 30.316272];

export default function myMap() {
  return (
    <YMaps>
      <Map
        defaultState={{ center: COORDINATES, zoom: 15 }}
        className={styles.map}
      >
        <Placemark
          geometry={MARKER_COORDINATES}
          options={{
            iconLayout: 'default#image',
            iconImageHref: markerIcon,
            iconImageSize: [32, 40],
            iconImageOffset: [-16, -40],
          }}
        />
      </Map>
    </YMaps>
  );
}
