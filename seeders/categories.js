import { Categories } from '../models';

export default async (transaction) => {
  const data = [
    'concert',
    'fanmeeting',
    'live',
  ];

  return Categories.bulkCreate(data.map(item => ({ name: item })), transaction);
};
