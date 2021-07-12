import { useState, useEffect } from "react";
// AXIOS
import axios from "axios";
import { BASE_URL, headers } from "../config/api";

export const useProject = (loading) => {
  // STATE
  const [state, setState] = useState({
    loading: true,
    projectsFound: [],
  });

  const getProjects = async () => {
    const URL = `${BASE_URL}/project`;
    try {
      const { data } = await axios.get(URL, { headers });
      const { projectsFound } = data;

      if (projectsFound) setState({ ...state, projectsFound });
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    getProjects();
  }, [loading]);

  return state;
};
