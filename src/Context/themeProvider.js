import React, { useState } from "react";
import ThemeContext from "./themeContext";

function ThemeProvider ({children }) {
  const [isDark, setIsDark] = useState(true);

  const tools = { isDark, setIsDark };

  return (
    <ThemeContext.Provider value={ tools }>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
