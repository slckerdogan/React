import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { GlobalProvider } from './Context/GlobalState' //context ile oluşan sağlayıcıyı import ederek bunu nelere kullancaksak, onları sarmaladık

//Yeri gelir birden fazla duruma özel farklı contextler olabilir. İşte aşağıda olan themes sabitiyle tanımlı ve akabinde export edilen bir provider var. Bunu butonla beraber kullandığın zaman arka planı değiştirebilirsin... Ancak bunu providera sahip bir elemana tanımlamak istersen o zaman provider içinde provider içinde eleman yapman gerekiyor!!!!!!!!!!

const themes = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  }
};

export const ThemeContext = React.createContext(themes.light);

function App() {
  const [theme, setTheme] = useState(themes.light)

  const themeChanging = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    }
    else {
      setTheme(themes.light)
    }
  }

  return (
    <>
      <button onClick={themeChanging}>{theme === themes.light ? "Light Theme" : "Dark Theme"}</button>
      <ThemeContext.Provider value={theme}>
        <GlobalProvider>
          <Header></Header>
        </GlobalProvider>
      </ThemeContext.Provider>

    </>
  )
}

export default App
