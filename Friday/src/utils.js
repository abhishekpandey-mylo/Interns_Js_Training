export function debounce(callback, delay = 400) {

  let timeoutId;

  return (...args) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export function formatDate(date) {

  return new Date(date).toLocaleString();
}