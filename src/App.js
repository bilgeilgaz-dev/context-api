import './App.css';
import ThemeContainer from './components/ThemeContainer';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ThemeContainer>
        </ThemeContainer>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
