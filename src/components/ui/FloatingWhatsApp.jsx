import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const CONTACTS = [
  { name: "Jyoti Babbar", phone: "918949111126" },
  { name: "Anupama Gumber", phone: "919784885301" }
];

function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  const sendMessage = (phone) => {
    const message = encodeURIComponent(
      "Hi SheZone, I would love to know more about your latest collection."
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-7 sm:right-6">
      
      {/* Contact Options */}
      {open && (
        <motion.div
          className="flex flex-col gap-2 rounded-xl bg-white p-3 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {CONTACTS.map((contact) => (
            <button
              key={contact.phone}
              onClick={() => sendMessage(contact.phone)}
              className="flex items-center gap-2 rounded-lg bg-[#25D366] px-3 py-2 text-sm text-white hover:opacity-90"
            >
              <FaWhatsapp size={16} />
              {contact.name}
            </button>
          ))}
        </motion.div>
      )}

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={18} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </motion.button>
    </div>
  );
}

export default FloatingWhatsApp;