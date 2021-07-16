import { useState, useEffect } from "react";
// AXIOS
import axios from "axios";
import { BASE_URL, headers } from "../config/api";

export const useCatalog = (loading) => {
  // STATE
  const [state, setState] = useState({
    loading: true,
    accountsFound: [],
  });

  const getAllAccounts = async () => {
    const URL = `${BASE_URL}/catalog`;
    try {
      const { data } = await axios.get(URL, { headers });
      const { accountsFound } = data;

      if (accountsFound)
        setState({
          ...state,
          accountsFound,
        });
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    getAllAccounts();
  }, [loading]);

  return state;
};
