export function sumOfSquares(S, D) {
    let sum = 0;
    for (let i = S; i <= D; i++) {
        sum += i * i;
    }
    return sum;
}

sumOfSquares(2, 5); // Вернет 54 (2^2 + 3^2 + 4^2 + 5^2)
sumOfSquares(1, 3); // Вернет 14 (1^2 + 2^2 + 3^2)


export function power(A, N) {
    let result = 1;
    for (let i = 0; i < N; i++) {
        result *= A;
    }
    return result;
}

// Пример использования
let A = 2;
let N = 3;
let result = power(A, N);
console.log(result); // Выведет 8, так как 2^3 = 8

power(2, 3); // 8 (2^3)
power(5, 2); // 25 (5^2)

export function factorialProduct(N) {
    let product = 1;
    for (let i = 1; i <= N; i++) {
        product *= i;
    }
    return product;
}

factorialProduct(3); // 6 (1 * 2 * 3)
factorialProduct(5); // 120 (1 * 2 * 3 * 4 * 5)

export function fibonacciSequence(N) {
    let a = 0;
    let b = 1;
    let c;

    if (N === 1) {
        return a;
    } else if (N === 2) {
        return b;
    } else {
        for (let i = 3; i <= N; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

fibonacciSequence(5); // 5 (1, 1, 2, 3, 5)
fibonacciSequence(8); // 21 (1, 1, 2, 3, 5, 8, 13, 21)

export function sumOfPowers(F) {
    let sum = 0;
    for (let i = 1; i <= F; i++) {
        let power = 1;
        for (let j = 1; j <= i; j++) {
            power *= i;
        }
        sum += power;
    }
    return sum;
}

// Пример использования функции
const F = 3;
const resultS = sumOfPowers(N);
console.log(resultS); // Выведет 32, так как 1^1 + 2^2 + 3^3 = 1 + 4 + 27 = 32

export function remainingLength(A, B) {
    if (A <= B) {
        return 0;
    }

    let count = 0;
    while (A >= B) {
        A -= B;
        count++;
    }

    return A;
}

remainingLength(10, 3); // 1 (Вернет длину незанятой части отрезка 10 после размещения максимально возможного количества отрезков длины 3, суммарная длина которых равна 9)
remainingLength(15, 4); // 3

export function findMinKAndSum(N) {
    let k = 1; // начинаем с первого числа (k=1)
    let sum = 0; // сумма чисел от 1 до k

    while (true) {
        sum += k; // добавляем текущее значение k к сумме
        if (sum == N) {
            break; // если сумма достигла или превысила N, завершаем цикл
        } else if (sum >= N) {
            k++
            break;
        }
        k++; // увеличиваем k для следующей итерации
    }

    return k; // возвращаем найденное минимальное k и сумму чисел
}

// Пример использования функции:
findMinKAndSum(10); // 4 (1 + 2 + 3 + 4 = 10)
findMinKAndSum(20); // 6 (1 + 2 + 3 + 4 + 5 + 6 = 21)

export function calculateGCD(A, B) {
    while (B !== 0) {
        let temp = B;
        B = A % B;
        A = temp;
    }
    return A;
}

export function findFibonacciIndex(N) {
    let a = 0;
    let b = 1;
    let index = 1;

    while (b < N) {
        let temp = a + b;
        a = b;
        b = temp;
        index++;
    }

    if (b === N) {
        return index;
    } else {
        return -1;
    }
}

