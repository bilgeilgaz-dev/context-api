import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return <div>
    <p>Active theme: {theme}</p>
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change theme</button>
  </div>;
}

export default Header;
