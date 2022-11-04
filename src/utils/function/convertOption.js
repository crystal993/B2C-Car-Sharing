import fuelTypeOption from '../constant/fuelTypeOption';
import segmentOption from '../constant/segmentOption';

export const segConvertName = segVal => {
  const result = segmentOption.filter(seg => {
    if (seg.value === segVal) {
      return seg.name;
    }
    return null;
  });
  return result[0].name;
};

export const fuelConvertName = fuelVal => {
  const result = fuelTypeOption.filter(fuel => {
    if (fuel.value === fuelVal) {
      return fuel.name;
    }
    return null;
  });
  return result[0].name;
};
