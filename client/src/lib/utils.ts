import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isElementInViewport(el: HTMLElement, offset = 50) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight - offset || document.documentElement.clientHeight - offset) &&
    rect.bottom >= 0
  );
}

export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

export function formatPhoneNumber(phone: string): string {
  // Format South African phone number
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`;
  }
  return phone;
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
