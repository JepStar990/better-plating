import { Link } from 'wouter';

interface LogoProps {
  variant?: 'header' | 'footer';
}

export default function Logo({ variant = 'header' }: LogoProps) {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <div className="metallic-gradient p-2 rounded-lg mr-2">
          <span className={`${variant === 'footer' ? 'text-white' : 'text-primary-foreground dark:text-white'} font-heading font-bold text-2xl`}>BP</span>
        </div>
        <div>
          <h1 className={`${variant === 'footer' ? 'text-white' : 'text-primary-foreground dark:text-white'} font-heading font-bold text-xl md:text-2xl`}>Better Plating</h1>
          <p className="text-light-darker dark:text-metallic text-xs hidden sm:block">Professional Zinc Electroplating</p>
        </div>
      </div>
    </Link>
  );
}
