import { Gauge, Cpu, BarChart3, Wrench, Target, Disc3, Wind, Zap, Search, Settings, Flag } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Gauge;
  startingPrice: string;
}

export const services: Service[] = [
  { id: "performance-tuning", title: "Performance Tuning", description: "Custom dyno tuning for maximum power and drivability. We optimize your vehicle's performance to its full potential.", icon: Gauge, startingPrice: "From $499" },
  { id: "ecu-remapping", title: "ECU Remapping", description: "Advanced ECU calibration for bolt-on and built engines. Custom maps developed in-house on our Dynapack dyno.", icon: Cpu, startingPrice: "From $699" },
  { id: "dyno-tuning", title: "Dyno Tuning", description: "State-of-the-art Dynapack hub dyno for precise, repeatable power measurements and tuning sessions.", icon: BarChart3, startingPrice: "From $299" },
  { id: "suspension", title: "Suspension Installation", description: "Coilovers, lowering springs, sway bars, and full corner balancing. Get the handling setup your car deserves.", icon: Wrench, startingPrice: "From $399" },
  { id: "wheel-alignment", title: "Wheel Alignment", description: "Precision 4-wheel alignment with race-spec adjustability. Street, track, and drift setups available.", icon: Target, startingPrice: "From $149" },
  { id: "brake-upgrades", title: "Brake Upgrades", description: "Big brake kits, performance pads, slotted rotors, and stainless lines. Stop as fast as you go.", icon: Disc3, startingPrice: "From $249" },
  { id: "exhaust", title: "Exhaust Systems", description: "Cat-back, turbo-back, and header installations. Custom fabrication available for unique applications.", icon: Wind, startingPrice: "From $349" },
  { id: "turbo-supercharger", title: "Turbo / Supercharger Install", description: "Forced induction installations from bolt-on kits to full custom turbo builds. Make serious power.", icon: Zap, startingPrice: "From $1,499" },
  { id: "diagnostics", title: "Diagnostics", description: "Comprehensive vehicle diagnostics with factory-level scan tools. Find and fix issues fast.", icon: Search, startingPrice: "From $99" },
  { id: "custom-builds", title: "Custom Builds", description: "Full engine builds, swaps, and custom fabrication. Dream it, we'll build it.", icon: Settings, startingPrice: "Contact Us" },
  { id: "track-prep", title: "Track Preparation", description: "Get your car race-ready with safety equipment, cooling upgrades, and performance tuning for the track.", icon: Flag, startingPrice: "From $799" },
];
