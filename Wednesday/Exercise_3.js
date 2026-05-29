// once(fn)
const once = (fn) => {
  let called = false;
  let result;

  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }

    return result;
  };
};


// memoize(fn)
const memoize = (fn) => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }

    return cache.get(key);
  };
};


// debounce(fn, wait)
const debounce = (fn, wait) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
};


// throttle(fn, limit)
const throttle = (fn, limit) => {
  let waiting = false;

  return (...args) => {
    if (!waiting) {
      fn(...args);

      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};


// pipe(...fns)
const pipe = (...fns) => {
  return (value) => {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
};


// curry(fn)
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) => {
      return curried(...args, ...nextArgs);
    };
  };
};




const init = once(() => console.log("running once"));

init();
init();
init();



const slowSquare = (n) => {
  console.log("computing", n);
  return n * n;
};

const fastSquare = memoize(slowSquare);

console.log(fastSquare(5));
console.log(fastSquare(5));



const addOne = (x) => x + 1;

const double = (x) => x * 2;

const addOneThenDouble = pipe(addOne, double);

console.log(addOneThenDouble(3));



const add = curry((a, b, c) => a + b + c);

console.log(add(1)(2)(3));

console.log(add(1, 2)(3));


const throttledLog = throttle(() => {
  console.log("Throttled Call");
}, 1000);

throttledLog();
throttledLog();
throttledLog();


const fruits = [
  "apple",
  "apricot",
  "banana",
  "blackberry",
  "blueberry",
  "cherry",
  "coconut",
  "date",
  "dragonfruit",
  "elderberry",
  "fig",
  "grape",
  "guava",
  "honeydew",
  "jackfruit",
];

const search = (query) => {
  const results = fruits.filter((fruit) =>
    fruit.startsWith(query.toLowerCase())
  );

  console.log(`[${query}] ->`, results);
};

const debouncedSearch = debounce(search, 300);


// Simulate Fast Typing
["a", "ap", "app", "appl", "apple"].forEach((query, index) => {
  setTimeout(() => {
    debouncedSearch(query);
  }, index * 50);
});