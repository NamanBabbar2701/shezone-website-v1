import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard.jsx";
import { products } from "../data/products.js";
import { CATEGORIES } from "../data/categories.js";
import WebsiteNotice from "../components/ui/WebsiteNotice.jsx";
import CatalogPopup from "../components/ui/CatalogPopup.jsx"

const WEBSITE_LIVE = true;

const instagramPosts = [
  {
    image:
      "https://res.cloudinary.com/doevv8qzu/image/upload/v1782300557/ig2_ldf2fs.png",
    link: "https://www.instagram.com/p/DZzPusulKaO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image:
      "https://res.cloudinary.com/doevv8qzu/image/upload/v1782300833/ig3_xr1v19.png",
    link: "https://www.instagram.com/p/DWGNgjEFLlw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image:
      "https://res.cloudinary.com/doevv8qzu/image/upload/v1782300833/ig1_kx9qy1.png",
    link: "https://www.instagram.com/p/DV8cRAdFPDr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

function Home() {
  const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const popupSeen = localStorage.getItem("catalogPopup");

  if (!popupSeen) {
    setShowPopup(true);
  }
}, []);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  if (!WEBSITE_LIVE) {
    return <WebsiteNotice />;
  }

  return (
    <>
    {showPopup && (
      <CatalogPopup
        onClose={() => {
          localStorage.setItem("catalogPopup", "true");
          setShowPopup(false);
        }}
      />
    )}
    <div className="space-y-12 sm:space-y-16">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            SheZone • Hanumangarh Jn.
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl">
            Redefining women fashion
            <span className="block text-accent">
              for the modern Indian muse.
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-text/80 sm:text-base">
            Discover premium sarees, lehengas, kurtis and occasion-wear curated
            with love. Thoughtful silhouettes, luxurious fabrics and timeless
            details that celebrate you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-accent"
            >
              Explore Collection
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-primary/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-soft transition hover:border-primary hover:bg-primary/5"
            >
              Visit Our Store
            </Link>
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] bg-primary/10 shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative pb-[120%]">
            <img
              src="https://res.cloudinary.com/doevv8qzu/image/upload/v1782229292/Lehanga2_ae6bkc.jpg"
              alt="SheZone premium ethnic wear"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 space-y-1 rounded-xl bg-white/90 px-3 py-2 text-xs shadow-soft sm:px-4 sm:py-3">
            <p className="font-semibold text-text">New Season • Wedding Edit</p>
            <p className="text-[11px] text-text/70">
              Handpicked pieces for your most special days.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text sm:text-xl">
            Featured categories
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              to={`/shop?category=${encodeURIComponent(category)}`}
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-text shadow-soft transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text sm:text-xl">
            New arrivals
          </h2>
          <Link
            to="/shop"
            className="text-xs font-semibold text-accent underline-offset-4 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Instagram preview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text sm:text-xl">
            From our Instagram
          </h2>
          <a
            href="https://www.instagram.com/sz_shezone?igsh=cGpvdDd0dzNjNno0"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-accent underline-offset-4 hover:underline"
          >
            Follow @sz_shezone
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.link}
              className="group overflow-hidden rounded-xl bg-white shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="relative pb-[110%]">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={post.image}
                    alt="Instagram Post"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold">
                      View on Instagram
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </>
  );
}

export default Home;
