const FAKE_USER_KEY = "fake-auth-user";

export const signUp = ({ email, password, username }) => {
  return new Promise((resolve, reject) => {
    console.log("Simulating signUp with:", { email, password, username });

    try {
      const existing = JSON.parse(
        localStorage.getItem(FAKE_USER_KEY) || "null",
      );
      if (existing?.email === email) {
        reject("This email is not available");
        return;
      }
    } catch (e) {
      /* ignore storage errors in test env */
    }

    const user = {
      name: username || (email && email.split("@")[0]) || "user",
      email,
      _id: "fake-id",
    };
    try {
      localStorage.setItem(FAKE_USER_KEY, JSON.stringify(user));
    } catch (e) {
      /* ignore storage errors in test env */
    }
    resolve({ token: "fake-jwt-token" });
  });
};

export const signIn = ({ email, password }) => {
  return new Promise((resolve) => {
    console.log("Simulating signIn with:", { email, password });
    try {
      const existing = JSON.parse(
        localStorage.getItem(FAKE_USER_KEY) || "null",
      );
      if (!existing || existing.email !== email) {
        const user = { name: email.split("@")[0], email, _id: "fake-id" };
        localStorage.setItem(FAKE_USER_KEY, JSON.stringify(user));
      }
    } catch (e) {
      /* ignore */
    }
    resolve({ token: "fake-jwt-token" });
  });
};

export const validateToken = (token) => {
  return new Promise((resolve) => {
    console.log("Simulating validateToken with:", token);
    try {
      const stored = JSON.parse(localStorage.getItem(FAKE_USER_KEY) || "null");
      if (stored) {
        resolve({ data: stored });
        return;
      }
    } catch (e) {
      /* ignore */
    }
    resolve({
      data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
    });
  });
};
