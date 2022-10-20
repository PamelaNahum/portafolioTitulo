import images from './images';

const wines = [
  {
    title: 'Palta Reina',
    price: '$3.500',
    tags: 'Palta rellena con ensalada de pollo',
  },
  {
    title: 'Ceviche',
    price: '$4.000',
    tags: 'Ceviche de Salmón',
  },
  {
    title: 'Tomate Relleno',
    price: '$4.400',
    tags: 'Tomate relleno con ensalada de atún',
  },
  {
    title: 'Machas a la parmesana',
    price: '$5.000',
    tags: 'Machas horneada con queso mantecoso',
  },
  {
    title: 'Locos Mayo',
    price: '$4.500',
    tags: 'Locos con mayonesa sobre ensalda',
  },
];

const cocktails = [
  {
    title: 'Cazuela',
    price: '$8.000',
    tags: 'Caldo de pollo, más verduras variadas',
  },
  {
    title: "Chaquicán",
    price: '$7.500',
    tags: 'Guiso de carne con papas, zapallo y otras verduras',
  },
  {
    title: 'Caldillo de congrio',
    price: '$9.000',
    tags: 'Caldo de congrio, más verduras variadas',
  },
  {
    title: 'Cerdo con puré',
    price: '$7.000',
    tags: 'Pulpa de cherdo acompañado con puré de papa',
  },
  {
    title: 'Protos grandos con pilco',
    price: '$7.000',
    tags: 'Protos cocidos con cebolla, zapallo, tomate y choclo',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
