import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowLeft, Check, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
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

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-2xl font-display font-bold mb-4 text-foreground">Product Not Found</h1>
        <Link to="/shop"><Button>Back to Shop</Button></Link>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-muted rounded-xl p-12 flex items-center justify-center">
            <img src={productImages[product.image]} alt={product.name} className="w-full max-w-md object-contain" />
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <p className="text-accent font-display font-semibold text-sm uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-foreground mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-border"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-display font-black text-foreground">${product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toLocaleString()}</span>
                  <span className="bg-accent/10 text-accent text-xs font-display font-bold px-2 py-1 rounded">
                    SAVE ${(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            <p className="text-muted-foreground font-body leading-relaxed mb-6">{product.description}</p>

            {product.features && (
              <div className="mb-6">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-3 text-foreground">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold flex-1 sm:flex-none">
                <ShoppingCart className="mr-2 w-5 h-5" /> Add to Cart
              </Button>
              <Link to="/book">
                <Button size="lg" variant="outline" className="font-display font-bold">
                  Book Installation
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { icon: Truck, label: "Free Shipping", sub: "Orders over $500" },
                { icon: Shield, label: "Warranty", sub: "1 Year Full" },
                { icon: RotateCcw, label: "Returns", sub: "30-Day Policy" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                  <p className="text-xs font-display font-bold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
