const initialCards = [
  {
    sourcename: "TREEHUGGER",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    publishedAt: "November 4, 2020",
    description:
      "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
    urlToImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    sourcename: "TREEHUGGER",
    title: "Everyone Needs a Special 'Sit Spot' in Nature 2",
    publishedAt: "November 4, 2020",
    description:
      "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
    urlToImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    sourcename: "TREEHUGGER",
    title: "'Sit Spot' in Nature 3",
    publishedAt: "November 4, 2020",
    description:
      "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me.",
    urlToImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    sourcename: "TREEHUGGER",
    title: "Everyone Needs a Special 'Sit Spot' in Nature 4",
    publishedAt: "November 4, 2020",
    description:
      "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me.",
    urlToImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const savedCards = [
  {
    sourcename: "TREEHUGGER",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    publishedAt: "November 4, 2020",
    description:
      "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me.",
    urlToImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    sourcename: "TREEHUGGER",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    publishedAt: "November 4, 2020",
    description:
      "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me.",
    urlToImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const apiKey = "7730c47a82614e0499fb4e9cc1a86ae0";

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export { initialCards, savedCards, apiKey, newsApiBaseUrl };
