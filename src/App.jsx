import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Contact from './pages/Contact.jsx'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  )
}

export default App
