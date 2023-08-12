import React, { useEffect, useState } from "react";
import ThemeContext from "./themeContext";

function ThemeProvider ({children }) {

  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme'));
  }

  const [isDark, setIsDark] = useState(getTheme() || false);


  useEffect(() => {
    isDark ? localStorage.setItem("theme", JSON.stringify(isDark)) : localStorage.setItem("theme", JSON.stringify(isDark));
  },[isDark])

  const tools = { isDark, setIsDark };

  return (
    <ThemeContext.Provider value={ tools }>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
