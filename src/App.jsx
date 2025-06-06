import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import LoginRegister from './routes/LoginRegister.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} /> 
            <Route path="/login" element={<LoginRegister />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
