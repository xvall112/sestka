import { colors } from '@material-ui/core';
import { house2 } from 'assets/images/leaflet-assets/house2.png';
export const promoNumbers = [
  {
    color: colors.pink,
    icon: 'fas fa-map-marker-alt',
    title: 'Lokalita',
    subtitle: 'Sázky, Příbram',
  },
  {
    color: colors.pink,
    icon: 'far fa-calendar-alt',
    title: 'Datum dokončení',
    subtitle: ' 2021',
  },
  {
    color: colors.pink,
    icon: 'fas fa-home',
    title: 'Typ',
    subtitle: 'Rodinný dům',
  },
];

export const features = {
  properties: [
    {
      title: 'Od sjezdu na dálnici do Prahy Vás dělí 5 minut.',
      avatar: house2,
    },
    {
      title: 'Do samotné Prahy dojedete za 50 minut.',
      avatar: '/src/assets/images/leaflet-assets/house2.png',
    },
    {
      title: 'Do centra Příbrami pouhé 2 minuty autem ',
      avatar: '/src/assets/images/leaflet-assets/house2.png',
    },
    {
      title: 'nebo 20 minut pěší chůze',
      avatar: '/src/assets/images/leaflet-assets/house2.png',
    },
    {
      title: 'V Bille za 3 minuty, Albert 4 minuty, Tesco 7 min',
      avatar: '/src/assets/images/leaflet-assets/house2.png',
    },
    {
      title: 'Autobusová zastávka - 1 minutu od domu.',
      avatar: '/src/assets/images/leaflet-assets/house2.png',
    },
  ],
};

export const mapData = {
  pins: [
    {
      location: { y: 49.676652203508134, x: 14.019295458063725 },
      popup: 'Rodinné domy "ŠESTKA"',
      icon: 'house',
    },
    {
      location: { y: 49.671028961317134, x: 13.98839764076555 },
      popup: 'Tesco',
      icon: 'shopping',
    },
    {
      location: { y: 49.68645701046786, x: 14.00893688309424 },
      popup: 'Billa',
      icon: 'shopping',
    },
    {
      location: { y: 49.67695218324511, x: 14.000986718825684 },
      popup: 'Albert',
      icon: 'shopping',
    },
    {
      location: { y: 49.69200542845624, x: 14.010335513389865 },
      popup: 'Oblastní nemocnice Příbram',
      icon: 'hospital',
    },
    {
      location: { y: 49.678410669829304, x: 14.01681304829646 },
      popup: 'Autobusová zastávka',
      icon: 'bus',
    },
    {
      location: { y: 49.67234361011606, x: 14.066239384579132 },
      popup: 'Nájezd na dálnici',
      icon: 'car',
    },
    {
      location: { y: 49.687255425442494, x: 14.009033230848672 },
      popup: 'Centrum Příbram',
      icon: 'car',
    },
  ],
};

export const contact = {
  mobile: '+420603262359',
  email: 'sulik@sios.cz',
  facebook: 'https://www.facebook.com/SIOSCZ',
  instagram: '',
};
