import axios from 'axios';

export const getCarsData = async (size, fuel) => {
  let query = '';
  if (!!size && !!fuel) {
    query = `?${size}&${fuel}`;
  }
  const { data } = await axios.get(`/api/cars${query}`);
  return data.payload;
};
