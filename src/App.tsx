import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import EventsPage from "./pages/EventsPage"
import Header from "./sections/Header"
import Footer from "./sections/Footer"
import CulturePage from "./pages/CulturePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <main className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<p className="h-screen w-screen flex items-center justify-center">404 NOT FOUND</p>} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
