import { Grid, ThemeProvider } from "@mui/material"
import { ThemeProvider as LegacyThemeProvider } from "@mui/styles"
import { theme } from "./styles/theme"
import Routes from "./routes"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import { BrowserRouter } from "react-router-dom"

const App: React.FC = () => {
  return (
    <LegacyThemeProvider theme={theme()}>
      <ThemeProvider theme={theme()}>
        <BrowserRouter>  
          <Header />
          <Grid container>
            <Sidebar />
            <Grid item xs={9} padding={3}>
              <Routes />
            </Grid>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </LegacyThemeProvider>
  )
}

export default App
