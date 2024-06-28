export function isPositive(numb) {
    return (numb > 0);
}

isPositive(5); // true
isPositive(-3); // false
isPositive(0); // false

export function isOdd(numb2) {
    return ((numb2 % 2) !== 0);
}

isOdd(5); // true
isOdd(8); // false
isOdd(-3); // true

export function checkInequality(A, B) {
    return (A > 2 && B <= 3);
}

checkInequality(4, 3); // true
checkInequality(1, 2); // false
checkInequality(5, 1); // true

export function checkInequality2(A1, B1) {
    return (A1 >= 0 || B1 < -2);
}

checkInequality2(4, -3); // true
checkInequality2(-1, -2); // false
checkInequality2(0, 1); // true

export function checkBetweenNumbers(A2, B2, C) {
    return ((A2 > B2 && B2 > C) || (C > B2 && B2 > A2));
}
checkBetweenNumbers(1, 2, 3); // true
checkBetweenNumbers(5, 5, 8); // false
checkBetweenNumbers(10, 7, 5); // true

export function checkOddThreeDigitNumber(number) {
    return (number % 2 !== 0) && (number >= 100) && (number <= 999 && number >= 100);
}


checkOddThreeDigitNumber(135); // true
checkOddThreeDigitNumber(246); // false
checkOddThreeDigitNumber(-789); // true
checkOddThreeDigitNumber(2458); // false

export function checkUniqueDigits(numb4) {
    const digits = String(numb4).split('');
    const uniqueDigits = new Set(digits);

    return digits.length === uniqueDigits.size;
}


checkUniqueDigits(123); // true
checkUniqueDigits(122); // false
checkUniqueDigits(-987); // true
checkUniqueDigits(1234); // false
checkUniqueDigits(-77); // false


export function isSecondQuadrant(x, y) {
    return x < 0 && y > 0;
}

isSecondQuadrant(-2, 3); // true
isSecondQuadrant(5, -1); // false
isSecondQuadrant(-1, -2); // false


export function isIsoscelesTriangle(a, b, c) {
    if (a === b && b !== c) {
        return true;
    } else if (a === c && b !== c) {
        return true;
    } else if (b === c && a !== b) {
        return true;
    } else {
        return false;
    }
}

isIsoscelesTriangle(3, 4, 3); // true
isIsoscelesTriangle(5, 7, 8); // false
isIsoscelesTriangle(5, 5, 6); // true


export function areSameColorFields(x1, y1, x2, y2) {
    // Проверяем, имеют ли поля одинаковый цвет
    return (x1 + y1) % 2 === (x2 + y2) % 2;
}

// Пример использования функции
let x1 = 1;
let y1 = 1;
let x2 = 2;
let y2 = 3;

if (areSameColorFields(x1, y1, x2, y2)) {
    console.log("Поля имеют одинаковый цвет");
} else {
    console.log("Поля имеют разный цвет");
}