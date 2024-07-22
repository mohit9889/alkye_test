import { setCookie } from "~/utils/cookieUtils";
import { setItemToLocalStorage } from "~/utils/localStorageUtils";

export const login = async ({ username, password }) => {
  const url = "https://untitled-twkmuar27a-uc.a.run.app/api/login/";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      // Throw an error if the response status is not OK
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Set the token in cookies
    if (data.token) {
      setCookie("token", data.token, { expires: 7 }); // Cookie expires in 7 days
      setItemToLocalStorage("token", data.token);
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchArticleData = async (token) => {
  const url = "https://untitled-twkmuar27a-uc.a.run.app/api";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Throw an error if the response status is not OK
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();
    return data;
  } catch (error) {
    // Catch and handle any errors
    console.error("Error:", error);
  }
};
