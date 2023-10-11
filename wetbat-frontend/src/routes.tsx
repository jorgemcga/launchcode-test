import { Route, Routes } from "react-router-dom"
import IndexPage from "./pages/index"
import QuotesPage from "./pages/quotes"

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/quotes" element={<QuotesPage />} />
  </Routes>
)

export default AppRoutes
