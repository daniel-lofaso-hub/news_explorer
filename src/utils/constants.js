const apiKey = "7730c47a82614e0499fb4e9cc1a86ae0";

/* global process */
const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export { apiKey, newsApiBaseUrl };
