export type PageId = 'home' | 'shop' | 'about';

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  title: string;
  badge?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  subhead: string;
  organicCertification: string;
  images: ProductImage[];
  priceNotice: string;
  unitPrice: number | null; // null because not supplied by user, respecting strict constraint
  currencySymbol: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  usageSteps: {
    step: string;
    title: string;
    instruction: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  isVerified?: boolean;
}
