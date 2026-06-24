import { FiInstagram, FiFacebook, FiPhone, FiMapPin, FiMail } from 'react-icons/fi'

function Contact() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Contact
        </p>
        <h1 className="text-2xl font-semibold text-text sm:text-3xl">
          We&apos;d love to welcome you in-store.
        </h1>
        <p className="max-w-2xl text-sm text-text/70">
          Reach us for styling assistance, bridal trousseau curation or any enquiries
          about our latest collections.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 rounded-2xl bg-white/80 p-4 shadow-soft sm:p-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Store address
            </p>
            <p className="flex items-start gap-2 text-sm text-text/80">
              <FiMapPin className="mt-1 text-primary" />
              <span>
                275, Ganganagar Rd,
                <br />
                opp. Axis Bank, Durga Colony
                <br />
                Hanumangarh, Rajasthan 335512
              </span>
            </p>
          </div>

          <div className="space-y-2 text-sm text-text/80">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Phone
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

          {/* <div className="space-y-2 text-sm text-text/80">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Email
            </p>
            <p className="flex items-center gap-2">
              <FiMail className="text-primary" />
              <span>care@shezone.studio</span>
            </p>
          </div> */}

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Connect with us
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/sz_shezone?igsh=cGpvdDd0dzNjNno0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary shadow-soft transition hover:bg-primary hover:text-white"
              >
                <FiInstagram />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary shadow-soft transition hover:bg-primary hover:text-white"
              >
                <FiFacebook />
              </a> */}
            </div>
          </div>

          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Send a message
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-text/70">Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-primary/20 bg-background px-3 py-2 text-sm outline-none ring-primary/20 placeholder:text-text/40 focus:border-primary focus:ring-2"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-text/70">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-primary/20 bg-background px-3 py-2 text-sm outline-none ring-primary/20 placeholder:text-text/40 focus:border-primary focus:ring-2"
                  placeholder="Your mobile number"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-text/70">Message</label>
              <textarea
                rows={4}
                className="w-full resize-none rounded-xl border border-primary/20 bg-background px-3 py-2 text-sm outline-none ring-primary/20 placeholder:text-text/40 focus:border-primary focus:ring-2"
                placeholder="Tell us what you are looking for – bridal, festive, everyday..."
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-accent"
            >
              Submit enquiry
            </button>
          </form>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white/80 shadow-soft">
          <iframe
            title="SheZone Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.919698336565!2d74.28871827499349!3d29.60602053921099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916f49595788ef9%3A0x7ed5fbe691472b2e!2sShe%20zone!5e0!3m2!1sen!2sin!4v1772611159678!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}

export default Contact

