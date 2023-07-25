// Завдання 1

/**
 * Функція `complexConvert` отримує об'єкт з числовими значеннями і збільшує їх на 1.
 *
 *  data - json дані для обробки.
 * Повертає - json дані в яких всі числові значення збільшено на 1.
 */
function complexConvert(data) {
  // Створюємо новий порожній об'єкт для збереження результату.
  const result = {} 
  // Перетворюємо json дані в об'єкт та отримуємо всі ключі об'єкта.
  const obj = JSON.parse(data)
  // Обходимо всі ключі та перевіряємо значення.
  for(let key in obj){
    if (typeof obj[key] === "number") {
  // Якщо значення є числом, збільшуємо його на 1.
  result[key] = obj[key] + 1;
    }else{
  // Якщо значення не є числом, просто копіюємо його у новий об'єкт без змін.
  result[key] = obj[key];}
  }
  // Повертаємо оброблений об'єкт.
  return JSON.stringify(result);
}

console.log("Завдання: 1 ==============================");

const data = {
  name: "John",
  age: 30,
  city: "New York",
  grades: {
    math: 90,
    science: 80,
    history: 70,
  },
};

console.log(complexConvert(JSON.stringify(data)));
// Виведе
// {"name":"John","age":31,"city":"New York","grades":{"math":90,"science":80,"history":70}}

// Завдання 2

/**
 * Функція `manipulateUrl` приймає URL у вигляді рядка і виконує над ним різні операції.
 *
 * url - URL у вигляді рядка.
 *
 * Повертає об'єкт, що містить різні властивості URL.
 *  href: // Повний URL.
    protocol: // Протокол URL.
    host:  // Хост URL.
    pathname // Шлях URL.
    search // Рядок запиту URL.
    params: Параметри URL у вигляді масиву пар [ключ, значення].
 */
function manipulateUrl(url) {
  // Створюємо новий об'єкт URL.
  const urlObject = new URL(url);
  // Змінюємо протокол URL на https.
  urlObject.protocol = "https:";
  // Змінюємо хост URL на 'newhost.com'.
  urlObject.host = "newhost.com";
  // Додаємо параметр 'newParam' зі значенням 'newValue' до URL.
  urlObject.searchParams.set("newParam", "newValue");
  // Видаляємо параметр 'oldParam' з URL, якщо він існує.
  urlObject.searchParams.delete("oldParam");
  // Повертаємо об'єкт, який містить різні властивості URL.  
 

  // Створюємо порожній масив для збереження пар [ключ, значення] параметрів
  const paramsArray = [];

  // Обходимо всі пари [ключ, значення] параметрів
  for (const [key, value] of urlObject.searchParams.entries()) {
    // Додаємо поточну пару [ключ, значення] до масиву paramsArray
    paramsArray.push([key, value]);
  }

  // Повертаємо об'єкт з різними властивостями URL
  return {
    href: urlObject.href,
    protocol: urlObject.protocol,
    host: urlObject.host,
    pathname: urlObject.pathname,
    search: urlObject.search,
    params: paramsArray,
  };
}

console.log("Завдання: 2 ==============================");

// Приклад використання функції manipulateUrl
let url = "http://example.com/path?param1=value1&param2=value2";

console.log(manipulateUrl(url));
// Виведе
// {
//   href: 'https://newhost.com/path?param1=value1&param2=value2&newParam=newValue',
//   protocol: 'https:',
//   host: 'newhost.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2&newParam=newValue',
//   params: [
//     [ 'param1', 'value1' ],
//     [ 'param2', 'value2' ],
//     [ 'newParam', 'newValue' ]
//   ]
// }

// Завдання 3

/**
 * Функція `searchParamsURL` створює новий об'єкт URL з вхідної URL-адреси та повертає об'єкт з параметрами пошуку URL.
 *  url - Вхідна URL-адреса для аналізу.
 *  Повертає об'єкт з параметрами пошуку URL.
 */
function searchParamsURL(url) {
  // Створення нового об'єкта URL з вхідного рядка
  const urlObject = new URL(url);
  // Отримання об'єкта URLSearchParams з властивості 'searchParams' об'єкта URL
  const searchParams = urlObject.searchParams;
  // Створення порожнього словника для збереження параметрів пошуку
  const params = new Map();
  // Перебір кожного параметра пошуку з 'searchParams' та додавання їх до словника 'params'
  for (const [name, value] of searchParams) {
  // Кожен 'param' - це масив, де [0] - ім'я параметра, а [1] - значення параметра
  params.set(name, value);
  }
  // Повертаємо словник
  return params;  
}

console.log("Завдання: 3 ==============================");

// Демонстрація використання функції:
console.log(
  searchParamsURL(
    "https://example.com/pathname?param1=value1&param2=value2&param3=value3"
  )
);
// Виведе
// Map(3) {
//   'param1' => 'value1',
//   'param2' => 'value2',
//   'param3' => 'value3'
// }

// Завдання 4

/**
 * Функція `manipulateSearchParams` повинна приймати об'єкт з параметрами та нову URL-адресу.
 * paramsObj (об'єкт) - об'єкт, який містить параметри пошуку.
 * newUrl (рядок) - нова URL-адреса.
 *
 * Функція повертає нову URL-адресу з властивістю searchParams, оновленою за допомогою параметрів з paramsObj.
 */
function manipulateSearchParams(paramsObj, newUrl) {
  // Створюємо новий об'єкт URL з нової URL-адреси.
  const urlObject = new URL(newUrl);
  // Використовуючи метод 'keys' з об'єкта Object, отримуємо всі ключі paramsObj.
  const paramKeys = Object.keys(paramsObj);
  // За допомогою циклу 'for of' перебираємо всі ключі та додаємо параметри пошуку до urlObj.
  for (const key of paramKeys) {
    urlObject.searchParams.set(key, paramsObj[key]);
  }
  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObject.href;
}

// Приклад використання функції manipulateSearchParams
console.log("Завдання: 4 ==============================");

console.log(
  manipulateSearchParams(
    { param1: "value1", param2: "value2" },
    "https://example.com/pathname"
  )
);
// Виведе: https://example.com/pathname?param1=value1&param2=value2

// Завдання 5

/**
 * Функція `deleteSearchParams` повинна приймати масив ключів параметрів і URL-адресу.
 * keys (масив) - масив, який містить ключі параметрів пошуку для видалення.
 * url (рядок) - URL-адреса.
 *
 * Функція повертає нову URL-адресу, з якої були видалені вказані параметри пошуку.
 */
function deleteSearchParams(keys, url) {
  // Створюємо новий об'єкт URL з URL-адреси.
  const urlObject = new URL(url);
  // За допомогою циклу 'for of' перебираємо всі ключі та видаляємо відповідні параметри пошуку з urlObj.
  for (const key of keys) {
    urlObject.searchParams.delete(key);
  }
  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObject.href;
}

// Приклад використання функції deleteSearchParams
console.log("Завдання: 5 ==============================");

console.log(
  deleteSearchParams(
    ["param1", "param2"],
    "https://example.com/pathname?param1=value1&param2=value2"
  )
);
// Виведе: https://example.com/pathname

// Завдання 6t

/**
 * Функція `createURLWithParams` приймає об'єкт параметрів пошуку та базову URL-адресу.
 * params (об'єкт) - об'єкт, ключі та значення якого стануть параметрами пошуку нової URL-адреси.
 * url (рядок) - базова URL-адреса.
 *
 * Функція повертає нову URL-адресу, до якої додані параметри пошуку з об'єкта params.
 */
function createURLWithParams(params, url) {
  // Створюємо новий об'єкт URL з базової URL-адреси.
  const urlObject = new URL(url);
  // За допомогою циклу 'for in' перебираємо всі ключі та значення об'єкта params та додаємо їх як параметри пошуку до urlObj.
  for (const key in params) {  
    urlObject.searchParams.append(key, params[key]);
  }
  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObject.href;
}

// Приклад використання функції createURLWithParams
console.log("Завдання: 6 ==============================");

console.log(
  createURLWithParams(
    { param1: "value1", param2: "value2" },
    "https://example.com"
  )
);
// Виведе: https://example.com/?param1=value1&param2=value2

// Завдання 7

/**
 * Функція `updateURLHash` приймає URL-адресу та рядок, і оновлює значення хеша в URL-адресі.
 * url (рядок) - URL-адреса, яку треба оновити.
 * hash (рядок) - нове значення хеша.
 *
 * Функція повертає нову URL-адресу з оновленим хешем.
 */
function updateURLHash(url, hash) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObject = new URL(url);
  // Оновлюємо значення хеша в URL-адресі.
  urlObject.hash = hash;
  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObject.href;
}

// Приклад використання функції updateURLHash
console.log("Завдання: 7 ==============================");

console.log(updateURLHash("https://example.com", "newHash"));
// Виведе: https://example.com/#newHash

// Завдання 8

/**
 * Функція `appendSearchParam` приймає URL-адресу, ключ і значення та додає новий параметр пошуку до URL-адреси.
 * url (рядок) - URL-адреса, до якої треба додати новий параметр пошуку.
 * key (рядок) - ключ нового параметра пошуку.
 * value (рядок) - значення нового параметра пошуку.
 *
 * Функція повертає нову URL-адресу з доданим параметром пошуку.
 */
function appendSearchParam(url, key, value) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObject = new URL(url);
  // Додаємо новий параметр пошуку до URL-адреси.
  urlObject.searchParams.append(key, value);
  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObject.href;
}

// Приклад використання функції appendSearchParam
console.log("Завдання: 8 ==============================");

console.log(appendSearchParam("https://example.com", "newParam", "newValue"));
// Виведе: https://example.com/?newParam=newValue

// Завдання 9
/**
 * Функція `modifyURLParameters` приймає URL та словник з параметрами пошуку.
 * Функція додає ці параметри до URL, а якщо такий параметр вже існує, замінює його.
 *
 * url - URL, який треба змінити.
 *  params - Словник з параметрами пошуку.
 * Повертається - Нова URL-адреса з оновленими параметрами пошуку.
 */
function modifyURLParameters(url, params) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObject = new URL(url);
  // Перебираємо словник params за допомогою for in
  for (const key in params) {
  // Отримаємо значення словника по ключу
   const value = params[key];
  // Якщо параметр вже існує, метод set замінює його новим значенням.
  // Якщо параметр не існує, метод set додає його.
  urlObject.searchParams.set(key, value);
  }
  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObject.href;
}

console.log("Завдання: 9 ==============================");

// Приклад використання функції modifyURLParameters
let modifiedURL = modifyURLParameters("https://example.com/?param1=oldValue1", {
  param1: "newValue1",
  param2: "newValue2",
});
console.log(modifiedURL);
// Виведе: https://example.com/?param1=newValue1&param2=newValue2

// Завдання 10
/**
 * Функція `checkURLParameters` приймає URL та множину параметрів пошуку.
 * Функція перевіряє, чи є ці параметри в URL.
 *
 * url - URL, який потрібно перевірити.
 *  params - Множина параметрів, які потрібно перевірити.
 * Повертається - Об'єкт, ключі якого відповідають ключам вхідного об'єкта,
 *                    а значеннями є булеві значення, що вказують на наявність відповідного параметра в URL.
 */
function checkURLParameters(url, params) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObject = new URL(url);
  // Створюємо новий об'єкт для зберігання результатів.
  const results = {};
  // Перебираємо елементи множини params за допомогою for of.
  for (const param of params) {
  // Додаємо новий ключ в результат з булевим значенням, яке вказує, чи є параметр в URL.
  results[param] = urlObject.searchParams.has(param);
    }
  // Повертаємо об'єкт з результатами.
  return results;
}

console.log("Завдання: 10 ==============================");

// Приклад використання функції checkURLParameters
let params = new Set(["param1", "param2", "param3", "param4"]);

console.log(
  checkURLParameters(
    "https://example.com/?param1=value1&param2=value2&param3=value3",
    params
  )
);
// Виведе: { param1: true, param2: true, param3: true, param4: false }

// Завдання 11

/**
 * Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 *
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки.
 */
function processURL(url, options) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObj = new URL(url);
  // Якщо в опціях вказано параметри пошуку, додаємо їх до URL.
  if (options.searchParams) {
  // За допомогою for in перебираємо ключи параметрів пошуку
  for (const key in options.searchParams) {
  // Для кожного ключа параметру додаємо його та відповідне значення до об'єкта 'urlObj' за допомогою методу 'append'.
  urlObj.searchParams.append(key, options.searchParams[key]);
    }
  }
  // Якщо в опціях вказано протокол, змінюємо протокол URL.
  if (options.protocol) {
    urlObj.protocol = options.protocol;
  }
  // Якщо в опціях вказано хост, змінюємо хост URL.
  if (options.host) {
    urlObj.host = options.host;
  }
  // Повертаємо об'єкт URL у вигляді рядка.
  return urlObj.href;
}

// Приклад використання функції processURL
console.log("Завдання: 11 ==============================");

console.log(
  processURL("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Виведе: 'http://newexample.com/path?param1=value1&param2=value2'

// Завдання 12

/**
 * Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 *
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки.
 */
function processUrl(url, options) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObj = new URL(url);
  // Перевіряємо, чи в об'єкті 'options' є параметри пошуку.
  if (options.searchParams) {
  // Якщо є, перебираємо ці параметри за допомогою циклу 'for in'.
  for (const key in options.searchParams) {
  // Для кожного ключа параметру додаємо його та відповідне значення до об'єкта 'urlObj' за допомогою методу 'append'.
  urlObj.searchParams.append(key, options.searchParams[key]);
    }
  }
  // Перевіряємо, чи в об'єкті 'options' є протокол.
  // Якщо є, змінюємо протокол 'urlObj' на протокол з 'options'.
  if (options.protocol) {
    urlObj.protocol = options.protocol;
  }  
  // Перевіряємо, чи в об'єкті 'options' є хост.
  // Якщо є, змінюємо хост 'urlObj' на хост з 'options'.
  if (options.host) {
    urlObj.host = options.host;
  }
  // Повертаємо 'urlObj' у вигляді рядка за допомогою методу 'toString'.
  return urlObj.toString();
}

// Приклад використання функції processURL
console.log("Завдання: 12 ==============================");

console.log(
  processUrl("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Виведе: 'http://newexample.com/path?param1=value1&param2=value2'

// Завдання 13
/**
 * Функція `manipulateQuery` отримує URL та словник з додатковими налаштуваннями та працює над пошуковими параметрами URL.
 *
 * url - URL для обробки.
 * options - Словник з налаштуваннями. Включає ключі `append` та `delete`.
 *
 * Повертається - Новий URL з модифікованими пошуковими параметрами.
 */
function manipulateQuery(url, options) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObj = new URL(url);
  // Якщо в словнику `options` є ключ `append`...
  if (options.has("append")) {
  // ...перебираємо його ключі та значення за допомогою циклу for...of.
  const appendOptions = options.get("append");
  // Додаємо кожний ключ і значення до об'єкта `searchParams` в URL.
  for (const [key, value] of appendOptions) {
    urlObj.searchParams.append(key, value);
  }
}
  // Якщо в словнику `options` є ключ `delete`...
  if (options.has("delete")) {
  // ...перебираємо його значення за допомогою циклу for...of.
  const deleteOptions = options.get("delete");
  // Видаляємо кожний ключ з об'єкта `searchParams` в URL.
  for (const key of deleteOptions) {
    urlObj.searchParams.delete(key);
  }
}
  // Повертаємо новий URL як рядок.
  return urlObj.toString();
}

console.log("Завдання: 13 ==============================");

// Приклад використання функції manipulateQuery
let options = new Map([
  [
    "append",
    new Map([
      ["param3", "value3"],
      ["param4", "value4"],
    ]),
  ],
  ["delete", ["param1", "param2"]],
]);

console.log(
  manipulateQuery(
    "https://example.com/path?param1=value1&param2=value2",
    options
  )
);
// Виведе: 'https://example.com/path?param3=value3&param4=value4'

// Завдання 14

/**
 * Функція `getUrlData` приймає URL у вигляді рядка і повертає інформацію про URL.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає об'єкт, що містить наступні ключі:
 * - 'origin': походження URL.
 * - 'hostname': ім'я хоста URL.
 * - 'port': порт URL.
 * - 'username': ім'я користувача в URL.
 * - 'password': пароль в URL.
 */
function getUrlData(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObj = new URL(url);
  const data = {
    origin: urlObj.origin,
    hostname: urlObj.hostname,
    port: urlObj.port,
    username: urlObj.username,
    password: urlObj.password,
  };  
  // Повертаємо об'єкт з відповідними даними.
  return data;
}

// Приклад використання функції getUrlData
console.log("Завдання: 14 ==============================");
console.log(getUrlData("https://username:password@example.com:8080/path"));
// Виведе:
// {
//   origin: 'https://example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   username: 'username',
//   password: 'password'
// }

// Завдання 15

/**
 * Функція `sortUrlParams` приймає URL і повертає новий URL з відсортованими пошуковими параметрами.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає новий URL з відсортованими пошуковими параметрами за ключами у порядку зростання.
 */
function sortUrlParams(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  // Отримуємо масив з ключами і значеннями параметрів за допомогою методу 'entries'.
  // Сортуємо масив за ключами у порядку зростання.
  const sortedParams = Array.from(searchParams.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  // Очищуємо пошукові параметри URL.
  searchParams.clear;
  // Додаємо відсортовані параметри до URL.
  for (const [key, value] of sortedParams) {
    searchParams.append(key, value);
  }

  // Повертаємо новий URL як рядок.
  return urlObj.toString();
}

// Приклад використання функції sortUrlParams
console.log("Завдання: 15 ==============================");
console.log(
  sortUrlParams("https://example.com/path?param2=value2&param1=value1")
);
// Виведе: 'https://example.com/path?param1=value1&param2=value2'

// Завдання 16

/**
 * Функція `getURLValues` приймає URL і повертає масив значень пошукових параметрів.
 * url - URL-адреса для аналізу.
 * Повертаємо - Масив значень пошукових параметрів.
 */
function getURLValues(url) {
  // Створюємо новий об'єкт URL з вхідною URL-адресою.
  const urlObj = new URL(url);
  // Отримуємо об'єкт `URLSearchParams` з пошуковими параметрами.
  const searchParams = urlObj.searchParams;
  // Отримуємо масив ключів пошукових параметрів.
  const keys = searchParams.keys();
  // Масив для збереження значень пошукових параметрів.
  const values = [];
  // Перебираємо ключі пошукових параметрів.
  // Отримуємо всі значення для даного ключа за допомогою методу `getAll`.
  // Додаємо значення до масиву.
  for (const key of keys) {
    const paramValues = searchParams.getAll(key);
    values.push(...paramValues);
  }

  // Повертаємо масив значень пошукових параметрів.
  return values;
}

// Приклад використання функції getURLValues
console.log("Завдання: 16 ==============================");
console.log(
  getURLValues(
    "https://example.com/path?param1=value1&param2=value2&param3=value3"
  )
);

// Завдання 17

/**
 * Функція `getUrlKeys` приймає URL і повертає масив з ключами пошукових параметрів.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає масив, що містить усі ключі пошукових параметрів.
 */
function getUrlKeys(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  // Отримуємо масив зі всіма ключами пошукових параметрів за допомогою методу 'keys'.
  const keys = Array.from(searchParams.keys());
  // Повертаємо масив з ключами. 
   return keys;
}

// Приклад використання функції getUrlKeys
console.log("Завдання: 17 ==============================");
console.log(getUrlKeys("https://example.com/path?param1=value1&param2=value2"));
// Виведе: [ 'param1', 'param2' ]
