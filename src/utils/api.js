const headers = { "Content-Type": "application/json" };

export const handleServerResponse = async (res) => {
  if (res.ok) return res.json();

  const friendlyStatusMessage = {
    401: "Incorrect email or password",
    409: "That email is already in use",
  };

  const defaultMessage = res.statusText || `Error: ${res.status}`;
  let serverMessage = defaultMessage;

  try {
    const data = await res.json();
    if (typeof data === "string") {
      serverMessage = data;
    } else if (data) {
      serverMessage =
        data.message ||
        data.error ||
        data?.errors?.[0]?.message ||
        defaultMessage;
    }
  } catch {
    serverMessage = defaultMessage;
  }
  if (friendlyStatusMessage[res.status]) {
    return Promise.reject(friendlyStatusMessage[res.status]);
  }
  return Promise.reject(serverMessage);
};

export const saveArticle = (article, token) => {
  const id =
    article._id ||
    article.url ||
    `fake-id-${Date.now()}-${Math.random().toString(36).slice(2)}`;

  return Promise.resolve({
    ...article,
    _id: id,
  });
};

export const removeSavedArticle = (itemId, token) => {
  return Promise.resolve({
    _id: itemId,
  });
};
