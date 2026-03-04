import Navbar from '../navigation/Navbar.jsx'
import Footer from '../navigation/Footer.jsx'

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

