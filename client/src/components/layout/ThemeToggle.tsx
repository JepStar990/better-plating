import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Force apply the theme class to document
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="p-2 rounded-full border-2 border-secondary hover:bg-secondary/20 focus:outline-none"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <i className="fas fa-sun text-accent text-lg"></i>
      ) : (
        <i className="fas fa-moon text-primary text-lg"></i>
      )}
    </Button>
  );
}
