const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

export const convertUsableDate = dates => {
  console.log(dates);
  const startDate = new Date(dates);
  const month = startDate.getMonth() + 1;
  const date = startDate.getDate();
  const dayName = days[startDate.getDay()];
  return month + '월 ' + date + '일' + ` (${dayName}) 부터`;
};
