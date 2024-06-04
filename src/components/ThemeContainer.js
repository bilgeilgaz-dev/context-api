import Button from "./Button";
import Header from "./Header";
import Profile from './Profile';

import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

function ThemeContainer() {
  const {theme} = useContext(ThemeContext);

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