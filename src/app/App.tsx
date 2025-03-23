import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import { queryClient } from './queryClient';
import { Routing } from '../pages';
import '../shared/fonts/fonts.css';
import { GlobalStyle } from './globalStyle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'MoonLite, Arial, sans-serif',
    }});

  return (
    <>
      <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <Routing />
                </ThemeProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </>
  )
}

export default App
