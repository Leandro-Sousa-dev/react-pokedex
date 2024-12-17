import { ThemeProvider } from './contexts/theme'
import { NumberProvider } from './contexts/number';
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query"
import { GlobalStyle } from './styles/global';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />

        <NumberProvider>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
          </QueryClientProvider>
        </NumberProvider>

      </ThemeProvider>

    </>
  )
}
export default App
