export function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}
console.log(calculateDistance(0, 5)); // 5)
console.log(calculateDistance(-3, 2)); // 5)
console.log('---');

export function calculateSegmentProduct(A, B, C) {
  const AC = calculateDistance(A, C);
  const BC = calculateDistance(B, C);
  return AC * BC;
}
console.log(calculateSegmentProduct(0, 5, 2)); // 6
console.log(calculateSegmentProduct(-1, 12, 7)); // 40
console.log('---');

export function calculateKilobytes(B) {
  return Math.floor(B / 1024);
}
console.log(calculateKilobytes(2048)); // 2
console.log(calculateKilobytes(5000)); // 4
console.log('---');

export function calculateSegments(A, B) {
  return Math.floor(A / B);
}
console.log(calculateSegments(10, 3)); // 3
console.log(calculateSegments(15, 4)); // 3
console.log('---');

export function calculateDigitSum(A) {
  const dec = Math.floor(A / 10);
  const ex = (A - (dec * 10));
  return (dec + ex);
}
console.log(calculateDigitSum(47)); // 11
console.log(calculateDigitSum(89)); // 17
console.log('---');

export function swapHundredsAndTens(number) {
  const sot = Math.floor(number / 100); // получаем цифру сотен
  const dec = Math.floor((number % 100) / 10); // получаем цифру десятков
  const ex = number % 10; // получаем цифру единиц

  const swappedNumber = dec * 100 + sot * 10 + ex; // переставляем цифры

  return swappedNumber;
}
console.log(swapHundredsAndTens(123)); // 213
console.log(swapHundredsAndTens(987)); // 897
console.log('---');

export function getHundredsDigit(number) {
  if (number <= 999) {
    return 0;
  }

  return Math.floor((number % 1000) / 100);
}
console.log(getHundredsDigit(1234)); // 2
console.log(getHundredsDigit(9876)); // 8
console.log(getHundredsDigit(500)); // 0
console.log('---');

export function getFullHours(sec) {
  return Math.floor(sec / 60 / 60);
}
console.log(getFullHours(3600)); // 1
console.log(getFullHours(7200)); // 2
console.log(getFullHours(18000)); // 5
console.log('---');

export function getDayOfWeek(dayOfYear) {
  const startDay = 1; // Номер дня недели для 1 января
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const dayOfWeekIndex = (startDay + dayOfYear - 1) % 7;
  return daysOfWeek[dayOfWeekIndex];
}
console.log(getDayOfWeek(1)); // 1
console.log(getDayOfWeek(10)); // 3
console.log(getDayOfWeek(365)); // 2
console.log('---');

export function countSquares(a, b, c) {
  const ac = Math.floor(a / c);
  const bc = Math.floor(b / c);
  return (ac * bc);
}
console.log(countSquares(6, 4, 2)); // 6
console.log(countSquares(8, 5, 3)); // 2
console.log(countSquares(10, 10, 5)); // 4
