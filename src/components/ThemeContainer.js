import Button from "./Button";
import Header from "./Header";
import Profile from './Profile';

import { useTheme } from '../context/ThemeContext';

function ThemeContainer() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Button />
      <hr />
      <h2>Profile</h2>
      <Profile />
    </div>
  );
}

export default ThemeContainer;