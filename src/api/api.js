import { instance } from './axios';

export const CarService = {
  getCarList: (fuelType, segment) =>
    instance.get(`/api/cars`, {
      fuelType,
      segment,
    }),
};
