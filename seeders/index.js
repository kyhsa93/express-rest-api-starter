import { sequelize } from '../models';
import categories from './categories';

const { server, database } = require('../config').default;

export default async () => {
  if (server.production || !database.sync) return {};

  return sequelize.transaction(async (transaction) => {
    const categorySeeds = await categories(transaction);
    return { categorySeeds };
  });
};
