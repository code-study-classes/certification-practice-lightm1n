export function incrementIfPositive(number) {
    if (number > 0) {
        return number + 1;
    }
    return number;
}

export function getIndexOfSmallerNumber(num1, num2) {
    if (num1 < num2) {
        return 1;
    } else if (num2 < num1) {
        return 2;
    } else {
        return 0; // числа равны
    }
}

export function findMiddleNumber(num1, num2, num3) {
    // Находим наименьшее и наибольшее число
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);
    
    // Находим среднее число
    let middleNumber = num1 + num2 + num3 - min - max;
    
    return middleNumber;
}

export function findUniqueNumber(num1, num2, num3, num4) {
    if (num1 === num2 && num1 === num3) {
        return 4;
    } else if (num1 === num2 && num1 === num4) {
        return 3;
    } else if (num1 === num3 && num1 === num4) {
        return 2;
    } else {
        return 1;
    }
}

export function calculateF(x) {
    if (x < 0) {
        return 0;
    } else if (Math.floor(x) % 2 === 0) {
        return 1;
    } else {
        return -1;
    }
}

export function describeNumber(n) {
    if (n % 2 === 0) {
        if (n >= 10 && n <= 99) {
            return "четное двузначное число";
        } else if (n >= 100 && n <= 999) {
            return "четное трехзначное число";
        } else {
            return "четное число";
        }
    } else {
        if (n >= 10 && n <= 99) {
            return "нечетное двузначное число";
        } else if (n >= 100 && n <= 999) {
            return "нечетное трехзначное число";
        } else {
            return "нечетное число";
        }
    }
}

export function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber){        
        case 1:           
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number.";
    }
    return dayName;
}

export function convertToMeters(unitNumber, lengthInUnits) {
    let lengthInMeters;

    switch (unitNumber) {
        case 1:
            lengthInMeters = lengthInUnits / 10; // дециметр в метр
            break;
        case 2:
            lengthInMeters = lengthInUnits * 1000; // километр в метр
            break;
        case 3:
            lengthInMeters = lengthInUnits; // метр в метр
            break;
        case 4:
            lengthInMeters = lengthInUnits / 1000; // миллиметр в метр
            break;
        case 5:
            lengthInMeters = lengthInUnits / 100; // сантиметр в метр
            break;
        default:
            lengthInMeters = 0;
    }

    return lengthInMeters;
}

export function describeAge(age) {
    let description;

    switch (age) {
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
            description = age + " лет";
            break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
            description = age + " лет";
            break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
            description = age + " лет";
            break;
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
            description = age + " лет";
            break;
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
            description = age + " лет";
            break;
        default:
            description = "Invalid age";
    }

    return description;
}


export function describeNumber2(number) {
    let description = "";
    
    switch (Math.floor(number / 100)) {
        case 1:
            description = "Число в диапазоне 100-199";
            break;
        case 2:
            description = "Число в диапазоне 200-299";
            break;
        case 3:
            description = "Число в диапазоне 300-399";
            break;
        case 4:
            description = "Число в диапазоне 400-499";
            break;
        case 5:
            description = "Число в диапазоне 500-599";
            break;
        case 6:
            description = "Число в диапазоне 600-699";
            break;
        case 7:
            description = "Число в диапазоне 700-799";
            break;
        case 8:
            description = "Число в диапазоне 800-899";
            break;
        case 9:
            description = "Число в диапазоне 900-999";
            break;
        default:
            description = "Число не входит в указанный диапазон";
    }
    
    return description;
}


