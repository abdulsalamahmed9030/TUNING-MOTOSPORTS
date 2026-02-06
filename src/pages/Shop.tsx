import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import productBrakes from "@/assets/product-brakes.jpg";
import productExhaust from "@/assets/product-exhaust.jpg";
import productSuspension from "@/assets/product-suspension.jpg";
import productTurbo from "@/assets/product-turbo.jpg";

const productImages: Record<string, string> = {
  "product-brakes": productBrakes,
  "product-exhaust": productExhaust,
  "product-suspension": productSuspension,
  "product-turbo": productTurbo,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-dark-base text-dark-base-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-black mb-2">Performance Parts</h1>
          <p className="text-dark-base-foreground/60 font-body">Premium aftermarket parts for serious builds.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-display font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/20 hover:shadow-lg transition-all">
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-display font-bold px-2.5 py-1 rounded">
                        {product.badge}
                      </span>
                    )}
                    <div className="aspect-square bg-muted p-8 flex items-center justify-center overflow-hidden">
                      <img
                        src={productImages[product.image]}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{product.category}</p>
                      <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 font-body">{product.description}</p>
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-border"}`} />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-lg text-foreground">${product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-xs">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
