import { useTheme } from '../context/ThemeContext';

function Button() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Active theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change theme</button>
    </div>
  );
}

export default Button;
