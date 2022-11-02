export const IsCreatedWithinDay = curDate => {
  const today = new Date();
  const resultDate = new Date(curDate);
  const timeGap = (today - resultDate) / (60 * 60 * 1000);

  // Time (minutes * seconds * millisecond)
  if (timeGap >= -24 && timeGap <= 24) {
    // 하루 이내일 때
    return true;
  } else {
    return false;
  }
};
