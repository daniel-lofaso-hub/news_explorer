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

export const addCardSave = (itemId, token) => {
  const requestHeaders = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  return fetch(`${baseUrl}/saved-news/${itemId}/save`, {
    method: "PUT",
    headers: requestHeaders,
  }).then(handleServerResponse);
};

export const removeCardSave = (itemId, token) => {
  const requestHeaders = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  return fetch(`${baseUrl}/saved-news/${itemId}/save`, {
    method: "DELETE",
    headers: requestHeaders,
  }).then(handleServerResponse);
};
