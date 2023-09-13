// api.js

import axios from "axios";

export const getShowMore = async () => {
  try {
    const response = await axios.get("http://localhost:1337/api/show-mores");

    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
};
