export const convertCurrency = currency => {
  return currency.toLocaleString();
};

export const getDateDiff = date => {
  const nowDate = new Date();
  const tmpDate = new Date(date);
  const diffDate = nowDate.getTime() - tmpDate.getTime();
  return Math.floor(diffDate / (1000 * 60 * 60 * 24));
};
