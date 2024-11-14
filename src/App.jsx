import { ThemeProvider } from './contexts/theme'
import { NumberProvider } from './contexts/number';
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes";
import { QueryClient, QueryClientProvider } from "react-query"

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
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 500;
    }
    ul, li{
      list-style: none;
    }
    a{
      text-decoration: none;
    }

    button{
      border: 0px;
    }

`

export default App
