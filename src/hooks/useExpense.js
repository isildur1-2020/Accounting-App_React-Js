import { useState, useEffect } from "react";
// AXIOS
import axios from "axios";
import { BASE_URL, headers } from "../config/api";

export const useExpense = () => {
  // STATE
  const [state, setState] = useState({
    loading: true,
    expensesFound: [],
  });

  const getAllSuppliers = async () => {
    try {
      const URL = `${BASE_URL}/expense`;
      const { data } = await axios.get(URL, { headers });
      const { expensesFound } = data;

      if (expensesFound)
        setState({
          loading: true,
          expensesFound,
        });
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    getAllSuppliers();
  }, []);

  return state;
};
