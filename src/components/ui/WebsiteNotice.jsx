import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function WebsiteNotice() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-8 text-center shadow-soft">

        {/* Logo / Brand */}
        <h1 className="text-4xl font-bold text-primary">
          SheZone
        </h1>

        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-accent">
          Hanumangarh Junction
        </p>

        {/* Main Message */}
        <h2 className="mt-6 text-3xl font-bold text-text">
          🚧 Website Update in Progress
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text/80">
          We are currently uploading our latest collection and updating product
          details. The website will be available soon with our complete
          catalogue.
        </p>

        <p className="mt-3 text-base font-medium text-primary">
          For product enquiries, availability, pricing, and orders,
          please contact us directly.
        </p>

        {/* WhatsApp Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="https://wa.me/919784885301"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white transition hover:scale-105"
          >
            <FaWhatsapp size={20} />
            Contact Anupama Gumber
          </a>

          <a
            href="https://wa.me/918949111126"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white transition hover:scale-105"
          >
            <FaWhatsapp size={20} />
            Contact Jyoti Babbar
          </a>

        </div>

        {/* Instagram */}
        <div className="mt-8 border-t pt-6">

          <p className="text-sm text-text/70">
            Follow us for the latest arrivals
          </p>

          <a
            href="https://www.instagram.com/sz_shezone"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-accent hover:underline"
          >
            <FaInstagram />
            @sz_shezone
          </a>

        </div>

        {/* Store Address */}
        <div className="mt-8 rounded-2xl bg-background p-4">
          <h3 className="font-semibold text-text">
            Visit Our Showroom
          </h3>

          <p className="mt-2 text-sm text-text/70">
            SheZone
            <br />
            Hanumangarh Junction, Rajasthan
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs text-text/50">
          Thank you for your patience. Our new collection is being uploaded
          daily and will be available soon.
        </p>

      </div>
    </div>
  );
}

export default WebsiteNotice;