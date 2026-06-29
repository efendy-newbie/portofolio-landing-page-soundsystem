export interface SoundPackage {
  id: string;
  name: string;
  power: string;
  basePrice: number;
  description: string;
  capacity: string;
  includes: string[];
}

export interface AddOnItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  iconName: string;
}

export interface Testimony {
  id: string;
  name: string;
  role: string;
  event: string;
  rating: number;
  message: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  scale: string;
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
