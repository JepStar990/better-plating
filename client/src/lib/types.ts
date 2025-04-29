export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'fasteners' | 'structural' | 'custom';
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
