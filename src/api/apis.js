import { instance } from './axiosInstance';

export const apis = {
  getAllCarList: () => {
    return instance.get('/api/cars');
  },
  getFilterCarList: params => {
    return instance.get('/api/cars', params);
  },
};
