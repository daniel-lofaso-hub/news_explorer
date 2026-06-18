import { useState } from "react";
import { newsApiBaseUrl, apiKey } from "./constants";

export const fetchNews = () => {
  return fetch(
    `${newsApiBaseUrl}?q=$Trump&from=2026-06-17&to=2026-06-10&pageSize=100&apiKey=${apiKey}`,
  ).then(handleResponse);
};

export const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  return res.json();
};
