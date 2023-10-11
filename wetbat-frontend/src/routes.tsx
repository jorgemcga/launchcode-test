import { Route, Routes } from "react-router-dom"
import QuotesPage from "./pages/quotes"

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<QuotesPage />} />
  </Routes>
)

export default AppRoutes
