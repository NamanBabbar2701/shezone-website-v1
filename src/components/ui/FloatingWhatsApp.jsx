import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const PRIMARY_NUMBER = '+918949111126'

function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Hi SheZone, I would love to know more about your latest collection.'
    )
    window.open(`https://wa.me/${PRIMARY_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-soft shadow-[#25D366]/40 sm:bottom-7 sm:right-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={18} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.button>
  )
}

export default FloatingWhatsApp

