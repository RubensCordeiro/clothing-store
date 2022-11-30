import { useState, useEffect } from "react";
import { createContext } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const categoryContext = createContext({
  categoryMap: {},
  setCategoryMap: () => {},
});

const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState([]);

  const fetchData = async () => {
    const response = await getCategoriesAndDocuments();
    setCategoryMap(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = { categoryMap, setCategoryMap };

  return (
    <categoryContext.Provider value={value}>
      {children}
    </categoryContext.Provider>
  );
};

export { categoryContext, CategoryProvider };
