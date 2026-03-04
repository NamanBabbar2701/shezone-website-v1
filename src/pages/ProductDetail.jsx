import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiShare2 } from 'react-icons/fi'
import { products } from '../data/products.js'

function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = useMemo(
    () => products.find((item) => item.id === id),
    [id]
  )

  const [activeIndex, setActiveIndex] = useState(0)

  if (!product) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          <FiArrowLeft /> Back
        </button>
        <p className="rounded-2xl bg-white/80 px-4 py-6 text-sm text-text/70 shadow-soft">
          We couldn&apos;t find this piece. It may have moved or is no longer available.
        </p>
      </div>
    )
  }
  const CONTACTS = [
  { name: "Anupama Gumber", phone: "919784885301" },
  { name: "Jyoti Babbar", phone: "918949111126" }
];

  const handleWhatsAppEnquiry = () => {
    const message = encodeURIComponent(
      `Hi SheZone, I am interested in "${product.name}" (ID: ${product.id}). Please share availability and details.`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  const handleShare = async () => {
    const url = window.location.href
    const text = `SheZone • ${product.name}`

    if (navigator.share) {
      try {
        await navigator.share({ title: text, text, url })
      } catch {
        // user cancelled share; ignore
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url)
        alert('Link copied to clipboard')
      } catch {
        alert('Unable to copy link. Please copy from the address bar.')
      }
    } else {
      alert('Sharing is not supported in this browser.')
    }
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-medium text-primary underline-offset-4 hover:underline"
      >
        <FiArrowLeft /> Back to previous
      </button>

      <section className="grid gap-8 rounded-2xl bg-white/80 p-4 shadow-soft md:grid-cols-2 md:p-6">
        <div className="space-y-4">
          <motion.div
            className="overflow-hidden rounded-2xl bg-background"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative pb-[120%]">
              <img
                src={product.images[activeIndex]}
                alt={product.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex-1 overflow-hidden rounded-xl border ${
                    activeIndex === index
                      ? 'border-primary shadow-soft'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  type="button"
                >
                  <div className="relative pb-[85%]">
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {product.category}
            </p>
            <h1 className="text-2xl font-semibold text-text sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-text/80">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1 rounded-xl bg-background px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Fabric
              </p>
              <p className="font-medium text-text">{product.fabric}</p>
            </div>
            <div className="space-y-1 rounded-xl bg-background px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Work
              </p>
              <p className="font-medium text-text">{product.workType}</p>
            </div>
            <div className="space-y-1 rounded-xl bg-background px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Price
              </p>
              <p className="text-lg font-semibold text-accent">
                {formatPrice(product.price)}
              </p>
            </div>
            <div className="space-y-1 rounded-xl bg-background px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Code
              </p>
              <p className="text-xs font-mono text-text/80">{product.id}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleWhatsAppEnquiry}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-accent"
            >
              WhatsApp enquiry
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-4 py-2.5 text-xs font-semibold text-primary shadow-soft transition hover:border-primary hover:bg-primary/5"
            >
              <FiShare2 /> Share link
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

