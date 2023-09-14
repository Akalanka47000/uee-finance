export const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

export const daysInCurrentMonth = () => {
  const date = new Date();
  return daysInMonth(date.getMonth() + 1, date.getFullYear());
};
