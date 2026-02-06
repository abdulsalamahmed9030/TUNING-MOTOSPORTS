export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  badge?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features?: string[];
}

export const categories = [
  "All",
  "Exhaust Systems",
  "Brake Kits",
  "Suspension",
  "Turbo & Superchargers",
  "ECU & Tuning",
  "Wheels & Tires",
  "Intake Systems",
  "Cooling",
];

export const products: Product[] = [
  {
    id: "1",
    name: "TF Pro Series Cat-Back Exhaust",
    category: "Exhaust Systems",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "product-exhaust",
    description: "Full stainless steel cat-back exhaust system with titanium burnt tips. Aggressive tone with daily-driveable sound levels.",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: ["T304 Stainless Steel", "Titanium Tips", "CNC Mandrel Bent", "+15 WHP Gains"],
  },
  {
    id: "2",
    name: "TF Big Brake Kit - 6 Piston",
    category: "Brake Kits",
    price: 2499.99,
    image: "product-brakes",
    description: "6-piston forged monoblock calipers with 380mm two-piece slotted rotors. Race-proven stopping power for the street.",
    badge: "New",
    rating: 4.9,
    reviews: 56,
    inStock: true,
    features: ["6-Piston Calipers", "380mm Rotors", "Stainless Lines", "Track Tested"],
  },
  {
    id: "3",
    name: "TF Coilover Kit - Track Edition",
    category: "Suspension",
    price: 1899.99,
    originalPrice: 2199.99,
    image: "product-suspension",
    description: "32-way adjustable damping with pillow ball top mounts. Full-length height adjustment for perfect stance and handling.",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    features: ["32-Way Adjustable", "Pillow Ball Mounts", "Full Height Adjust", "Swift Springs"],
  },
  {
    id: "4",
    name: "TF-500 Turbo Upgrade Kit",
    category: "Turbo & Superchargers",
    price: 4299.99,
    image: "product-turbo",
    description: "Complete bolt-on turbo kit with ball-bearing turbo, intercooler, and all piping. Supports up to 500 WHP.",
    badge: "Pro",
    rating: 4.9,
    reviews: 34,
    inStock: true,
    features: ["Ball-Bearing Turbo", "Bar & Plate IC", "Silicone Couplers", "500 WHP Capable"],
  },
  {
    id: "5",
    name: "TF Stage 2 ECU Tune",
    category: "ECU & Tuning",
    price: 699.99,
    image: "product-exhaust",
    description: "Custom ECU calibration optimized for bolt-on modifications. Dyno-proven gains with safe, reliable power delivery.",
    rating: 4.6,
    reviews: 212,
    inStock: true,
    features: ["Custom Calibration", "Dyno Proven", "Rev Matching", "Launch Control"],
  },
  {
    id: "6",
    name: "TF Carbon Intake System",
    category: "Intake Systems",
    price: 549.99,
    image: "product-turbo",
    description: "Full carbon fiber cold air intake with high-flow filter. Heat-shielded design for maximum airflow and cool charge temps.",
    rating: 4.5,
    reviews: 78,
    inStock: true,
    features: ["Carbon Fiber", "High-Flow Filter", "Heat Shield", "+8 WHP Gains"],
  },
];
