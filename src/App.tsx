import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import EventsPage from "./pages/EventsPage"
import Header from "./sections/Header"

function App() {
  return (
    <main className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </main>
  )
}

export default App
