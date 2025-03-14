import { createContext, useEffect, useReducer } from "react";
import { HabitReducer } from "../Helpers/HabitReducer";

const initialValue = [
  // {
  //   id: 1,
  //   habit: "Study English 3 hours daily",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("habit")) || [];
};

// eslint-disable-next-line react-refresh/only-export-components
export const HabitContext = createContext(null);

export const HabitProvider = ({ children }) => {
  const [habits, dispatch] = useReducer(HabitReducer, initialValue, init);

  useEffect(() => {
    localStorage.setItem("habit", JSON.stringify(habits));
  }, [habits]);

  return (
    <HabitContext.Provider value={{ habits, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
};
