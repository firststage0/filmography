export const fetcher = (url: string, options: object) => {
  return fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
};
