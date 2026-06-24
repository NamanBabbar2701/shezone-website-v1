import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../../assets/shezone.png'

const WEBSITE_LIVE = false

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-background/90 backdrop-blur-sm shadow-soft">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        {WEBSITE_LIVE ? (
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary sm:text-base"
          >
            <img
              src={logo}
              alt="SheZone"
              className="h-9 w-9 rounded-xl object-contain bg-white"
              loading="eager"
              decoding="async"
            />

            <span className="flex flex-col leading-tight">
              <span>SheZone</span>
              <span className="text-[11px] font-medium text-accent sm:text-xs">
                A Passion of Lady
              </span>
            </span>
          </Link>
        ) : (
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary sm:text-base">
            <img
              src={logo}
              alt="SheZone"
              className="h-9 w-9 rounded-xl object-contain bg-white"
              loading="eager"
              decoding="async"
            />

            <span className="flex flex-col leading-tight">
              <span>SheZone</span>
              <span className="text-[11px] font-medium text-accent sm:text-xs">
                A Passion of Lady
              </span>
            </span>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-6 text-sm font-medium text-text sm:flex">
            {navLinks.map((link) => {
              const isDisabled =
                !WEBSITE_LIVE && link.label !== 'Contact'

              if (isDisabled) {
                return (
                  <span
                    key={link.to}
                    className="cursor-not-allowed text-gray-400"
                  >
                    {link.label}
                  </span>
                )
              }

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-soft transition hover:bg-primary hover:text-white sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-primary/10 bg-background/95 px-4 pb-3 pt-2 shadow-soft sm:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-text">

            {navLinks.map((link) => {
              const isDisabled =
                !WEBSITE_LIVE && link.label !== 'Contact'

              if (isDisabled) {
                return (
                  <span
                    key={link.to}
                    className="rounded-lg px-2 py-2 text-gray-400"
                  >
                    {link.label}
                  </span>
                )
              }

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-2 py-2 transition hover:bg-white ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            })}

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar