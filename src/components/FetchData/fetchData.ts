export const apiKey = process.env.REACT_APP_API_KEY;

export const fetchData = {
  url: "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50",
  options: {
    method: "GET",
    headers: { accept: "application/json", "X-API-KEY": apiKey },
  },
};
