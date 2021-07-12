import { useState, useEffect } from "react";
// AXIOS
import axios from "axios";
import { BASE_URL, headers } from "../config/api";

export const useSupplier = (loading) => {
  // STATE
  const [state, setState] = useState({
    loading: true,
    suppliersFound: [],
  });

  const getAllSuppliers = async () => {
    try {
      const URL = `${BASE_URL}/supplier`;
      const { data } = await axios.get(URL, { headers });
      const { suppliersFound } = data;

      if (suppliersFound)
        setState({
          loading: true,
          suppliersFound,
        });
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    getAllSuppliers();
  }, [loading]);

  return state;
};
