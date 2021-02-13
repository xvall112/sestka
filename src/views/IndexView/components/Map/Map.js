import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '50vh',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '100%',
    },
  },
}));

/**
 * Component to display the map
 *
 * @param {Object} props
 */
const Map = props => {
  const { zoom, center, pins, className, ...rest } = props;

  const classes = useStyles();
  const markerIconHouse = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/house2.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });
  const markerIconShopping = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/shopping.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });
  const markerIconHospital = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/hospital.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });
  const markerIconBus = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/bus.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });
  const markerIconCar = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/car.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });

  return (
    <MapContainer
      zoom={zoom}
      center={center}
      className={clsx('map', classes.root, className)}
      {...rest}
    >
      <TileLayer
        className="map__tile-layer"
        detectRetina={true}
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins &&
        pins.length &&
        pins.map((item, i) => (
          <Marker
            icon={
              item.icon === 'hospital'
                ? markerIconHospital
                : item.icon === 'house'
                ? markerIconHouse
                : item.icon === 'shopping'
                ? markerIconShopping
                : item.icon === 'car'
                ? markerIconCar
                : markerIconBus
            }
            className="map__marker"
            position={[item.location.y, item.location.x]}
            key={i}
          >
            <Tooltip>{item.popup}</Tooltip>
          </Marker>
        ))}
    </MapContainer>
  );
};

Map.defaultProps = {
  zoom: 12,
  center: [0, 0],
};

export default Map;
