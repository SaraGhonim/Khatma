import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const darkTheme =  { text: "#ddd", ui: "#333", bg: "#555"};
  const lightTheme = { text: "#555", ui: "#ddd", bg: "#eee"};
  const [isLightTheme, setLight] = useState(true);
  const toggleTheme = () => {
    setLight(!isLightTheme);
  };
  return (
    <ThemeContext.Provider
      value={{ darkTheme, lightTheme, isLightTheme, toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
