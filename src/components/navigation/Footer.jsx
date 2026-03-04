import { FiPhone, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-8 border-t border-primary/10 bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-sm text-text/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Visit Us
          </p>
          <p className="flex items-start gap-2">
            <FiMapPin className="mt-1 text-primary" />
            <span>
              275 Sgn Road,
              <br />
              Opp. Axis Bank,
              <br />
              Hanumangarh Jn.
            </span>
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Call Us
          </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-primary" />
            <a href="tel:+918949111126" className="hover:text-primary">
              +91 8949111126
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-primary" />
            <a href="tel:+919784885301" className="hover:text-primary">
              +91 9784885301
            </a>
          </p>
        </div>

        <div className="space-y-2 text-xs text-right sm:text-left">
          <p className="font-semibold text-primary">SheZone – Redefining Women Fashion</p>
          <p className="text-[11px] text-text/60">
            Crafted with love for modern Indian women.
          </p>
          <p className="text-[11px] text-text/50">
            © {new Date().getFullYear()} SheZone. All rights reserved.
          </p>
          <p>
            <Link
              to="/contact"
              className="text-xs font-medium text-accent underline-offset-4 hover:underline"
            >
              Contact &amp; Directions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

