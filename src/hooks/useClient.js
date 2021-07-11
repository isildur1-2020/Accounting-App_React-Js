import { useState, useEffect } from "react";
// AXIOS
import axios from "axios";
import { BASE_URL, headers } from "../config/api";

export const useClient = () => {
  // STATE
  const [state, setState] = useState({
    loading: true,
    clientsFound: [],
  });

  const getAllClients = async () => {
    const URL = `${BASE_URL}/client`;
    try {
      const { data } = await axios.get(URL, { headers });
      const { clientsFound } = data;

      if (clientsFound)
        setState({
          ...state,
          clientsFound,
        });
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);

  return state;
};
