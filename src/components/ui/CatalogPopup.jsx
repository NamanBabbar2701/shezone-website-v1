import { products } from "../../data/products";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import logo from "../../assets/shezone.png";

function CatalogPopup({ onClose }) {
  const [showContacts, setShowContacts] = useState(false);

  const CONTACTS = [
    {
      name: "Anupama Gumber",
      phone: "919784885301",
    },
    {
      name: "Jyoti Babbar",
      phone: "918949111126",
    },
  ];

  const handleWhatsApp = (phone) => {
    const message = encodeURIComponent(
      "Hi SheZone! I visited your website and would like to know more about your latest collection."
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
          >
            <FiX size={22} />
          </button>

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="SheZone"
              className="h-20 w-20 rounded-full object-contain"
            />
          </div>

          {/* Heading */}
          <div className="mt-4 text-center">
            <h2 className="text-3xl font-bold text-primary">
              🌸 Catalog is Expanding
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We are adding new arrivals every day to bring you the latest
              fashion trends.
            </p>

            <p className="mt-2 font-semibold text-accent">
              ✨ Stay Tuned!
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Currently showcasing <strong>{products.length}+ Products</strong>
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3">

            {/* Browse */}
            <button
              onClick={onClose}
              className="rounded-full bg-primary py-3 font-semibold text-white transition hover:bg-accent"
            >
              Browse Collection
            </button>

            {/* WhatsApp */}
            <button
              onClick={() => setShowContacts(!showContacts)}
              className="flex items-center justify-center gap-2 rounded-full border border-green-600 py-3 font-semibold text-green-600 transition hover:bg-green-50"
            >
              <FaWhatsapp size={20} />
              Contact on WhatsApp
            </button>

            {showContacts && (
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                {CONTACTS.map((contact) => (
                  <button
                    key={contact.phone}
                    onClick={() => handleWhatsApp(contact.phone)}
                    className="block w-full border-b last:border-b-0 px-4 py-3 text-left transition hover:bg-gray-50"
                  >
                    <div className="font-semibold">{contact.name}</div>
                    <div className="text-sm text-gray-500">
                      +{contact.phone}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-400">
            Thank you for supporting SheZone ❤️
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CatalogPopup;