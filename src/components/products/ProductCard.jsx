import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

function ProductCard({ product }) {
  const primaryImage = product.images[0];

  const mrp = Number(product.mrp || 0);
  const discount = Number(product.discount || 0);

  const finalPrice =
    discount > 0 ? Math.round(mrp - (mrp * discount) / 100) : mrp;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
    >
      <Link to={`/product/${product.id}`} className="flex flex-1 flex-col">
        <div className="relative overflow-hidden pb-[130%]">
          <img
            src={primaryImage}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {product.isNew && (
            <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-soft">
              New
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {product.category}
          </p>

          <h3 className="text-sm font-semibold text-text sm:text-base">
            {product.name}
          </h3>

          <div className="mt-auto flex flex-wrap items-center gap-2">
            <span className="text-base font-bold text-accent sm:text-lg">
              {formatPrice(finalPrice)}
            </span>

            {discount > 0 && (
              <>
                <span className="text-xs text-gray-400 line-through sm:text-sm">
                  {formatPrice(mrp)}
                </span>

                <span className="rounded-full bg-red-500 px-2 py-1 text-[10px] font-semibold text-white">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default ProductCard;
