import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components';
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';
import { useDarkMode } from '../../styles/useDarkMode';

export function SignIn() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <h1>
          SignIn
      </h1>
    </ThemeProvider>
  );
}