import { LIMIT } from 'constants/db';

export default (data, page?: string | number | null, perPage?: string | number | null): Record<string, number> => {
  let [limit, offset] = [Number(perPage || LIMIT), Number(page || 1)];
    console.log(`limit`, limit, offset)

  if (Number.isNaN(Number(limit))) {
    limit = LIMIT;
  }
  if (Number.isNaN(Number(offset))) {
    offset = 1;
  }
  console.log(`limit`, limit, offset)
  return data.slice((offset - 1) * limit, offset * limit);
};
