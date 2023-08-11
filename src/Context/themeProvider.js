import React, { useState } from "react";
import ThemeContext from "./themeContext";

function ThemeProvider ({children }) {
  const [isDark, setIsDark] = useState(true);

  const changeTheme = () => {
    isDark ? setIsDark(false) : setIsDark(true);
  }

  const tools = { isDark, changeTheme };

  return (
    <ThemeContext.Provider value={ tools }>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
