// Code to fetch quote from API
import axios from "axios";

const BASE_URL = "https://api.api-ninjas.com/v1/quotes";

const GetQuote = async (category: string = "happiness") => {
  try {
    const response = await axios.get(`${BASE_URL}?category=${category}`, {
      headers: {
        "X-Api-Key": "pcHR7t9qajiJCH0bZdMnqg==wybjcv2QEXzvmSve",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error: ", error.response?.data || error.message);
    return null;
  }
};

export default GetQuote;
