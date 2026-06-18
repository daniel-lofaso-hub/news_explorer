import { newsApiBaseUrl, apiKey } from "./constants";

const formatDate = (date) => date.toISOString().slice(0, 10);

export const fetchNews = (keyword) => {
  const to = new Date();
  const from = new Date(to);
  from.setDate(to.getDate() - 7);

  return fetch(
    `${newsApiBaseUrl}?q=${encodeURIComponent(keyword)}&from=${formatDate(from)}&to=${formatDate(to)}&pageSize=100&apiKey=${apiKey}`,
  ).then(handleResponse);
};

export const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(
      "Sorry, something went wrong during the request. Please try again later.",
    );
  }
  return res.json();
};
