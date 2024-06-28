//-----------------
// 1
export function countUppercaseLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countUppercaseLetters;
// -----------------=-
// 3

export function containsSubstring(S, S0) {
  return S.includes(S0);
}

// Пример использования функции
let S = 'Hello, World!';
let S0 = 'World';
console.log(containsSubstring(S, S0)); // Выведет true

S = 'Hello, World!';
S0 = 'Python';
console.log(containsSubstring(S, S0)); // Выведет false
//-------------------
// 5
export function countWordsWithSameLetters(sentence) {
  const words = sentence.split(' ');
  let count = 0;

  for (const word of words) {
    if (word.length > 1 && word[0].toLowerCase() === word[word.length - 1].toLowerCase()) {
      count++;
    }
  }

  return count;
}

// Пример использования функции
const sentence = 'Hello world with apples and oranges';
console.log(countWordsWithSameLetters(sentence)); // Выведет 2, так как "world" и "apples" начинаются и заканчиваются на одну и ту же букву
//--------------------------
// 7
export function normalizeSpaces(sentence) {
  return sentence.replace(/\s+/g, ' ').trim();
}

// Пример использования функции
const word = '   Hello    world   with    spaces   ';
console.log(normalizeSpaces(sentence)); // Выведет "Hello world with spaces"

//----------------------------
// 9
export function encryptSentence(sentence) {
  let evenChars = '';
  let oddChars = '';

  for (let i = 0; i < sentence.length; i++) {
    if (i % 2 === 0) {
      evenChars += sentence[i];
    } else {
      oddChars = sentence[i] + oddChars;
    }
  }

  return evenChars + oddChars;
}

// Пример использования функции
const s = 'Hello world';
console.log(encryptSentence(sentence)); // Выведет "Hlowrdel ol"
//----------------------------
// Частное при частное 10
function checkBrackets(str) {
  const stack = [];

  for (const char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0 || stack.pop() !== '(') {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Пример использования
const inputString = '((a+b)*(c-d))';
if (checkBrackets(inputString)) {
  console.log('Скобки расставлены правильно.');
} else {
  console.log('Скобки расставлены неправильно.');
}

// 2
export function combineStrings(N1, N2, S1, S2) {
  const A = S1.slice(0, N1);
  const B = S2.slice(-N2);
  return A + B;
}
console.log(combineStrings(3, 2, 'Hello', 'World')); // 'Helld'
console.log(combineStrings(2, 4, 'JavaScript', 'Coding')); // 'Jading'
console.log(combineStrings(1, 3, 'Apple', 'Banana')); // 'Aana'

// 4
export function replaceSubstring(S, S1, S2) {
  const index = S.indexOf(S1);
  if (index !== -1) {
    return S.slice(0, index) + S2 + S.slice(index + S1.length);
  }
  return S;
}
console.log(replaceSubstring('Hello, World!', 'World', 'Universe')); // 'Hello, Universe!'
console.log(replaceSubstring('JavaScript is amazing', 'is', 'will be')); // 'JavaScript will be amazing'
console.log(replaceSubstring('Programming is fun', 'Java', 'Python')); // 'Programming is fun'
console.log(replaceSubstring('OpenAI', 'AI', 'Artificial Intelligence')); // 'OpenArtificial Intelligence'
// 6
export function countWordsWithA(sentence) {
  const words = sentence.split(' ');
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes('a')) {
      count++;
    }
  }
  return count;
}
console.log(countWordsWithA('Apple Banana Cherry')); // 2
console.log(countWordsWithA('Hello World')); // 0
console.log(countWordsWithA('Aardvark Zebra Elephant')); // 3
console.log(countWordsWithA('This is a sample sentence.')); // 2

// 8
export function extractFileName(fullFileName) {
  const N = fullFileName.split('/').pop();
  const Z = N.split('.')[0];
  return Z;
}
console.log(extractFileName('C:/Users/username/Documents/example.txt')); // 'example'
console.log(extractFileName('../index.html')); // 'index'
console.log(extractFileName('/home/user/images/photo.jpg')); // 'photo'

//Частное при частное 10
export function checkBrackets(str) {
    let stack = [];

    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Пример использования
const inputStringq = "((a+b)*(c-d))";
if (checkBrackets(inputStringq)) {
    console.log("Скобки расставлены правильно.");
} else {
    console.log("Скобки расставлены неправильно.");
}