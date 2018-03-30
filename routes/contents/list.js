import { contents } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.user;
    const { from, to, page } = request.query;

    if ((!from && !to && !page) || (!from && to) || (from && !to)) {
      return response.status(400).send('invalid query');
    }

    const result = await contents.list({ id, ...request.query });

    return response.status(200).send(result).end();
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};
