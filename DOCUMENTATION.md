# Better Plating Website - Technical Documentation

## Project Overview

The Better Plating website is a comprehensive web application for a zinc electroplating company based in South Africa. The site is designed to showcase the company's services, products, and processes while enabling potential customers to submit inquiries and service requests.

This documentation provides an in-depth technical overview of the project's architecture, components, and implementation details.

## Table of Contents

1. [Architecture](#architecture)
2. [Frontend](#frontend)
   - [Component Structure](#component-structure)
   - [Routing](#routing)
   - [State Management](#state-management)
   - [Styling](#styling)
   - [Theme System](#theme-system)
3. [Backend](#backend)
   - [API Endpoints](#api-endpoints)
   - [Data Storage](#data-storage)
   - [Schema](#schema)
4. [Features Implementation](#features-implementation)
   - [Contact Form](#contact-form)
   - [Dark/Light Mode](#darklight-mode)
   - [Product Filtering](#product-filtering)
   - [Animation Effects](#animation-effects)
5. [Performance Optimizations](#performance-optimizations)
6. [SEO Considerations](#seo-considerations)
7. [Accessibility](#accessibility)
8. [Future Enhancements](#future-enhancements)

## Architecture

The project follows a modern full-stack JavaScript architecture with a clear separation of concerns:

- **Frontend**: React-based single-page application (SPA) with TypeScript
- **Backend**: Express.js server with RESTful API endpoints
- **Data Storage**: In-memory storage for demonstration purposes
- **Shared Code**: Common schema definitions shared between frontend and backend

The application is built with a responsive, mobile-first approach and uses modern web standards and practices.

## Frontend

### Component Structure

The frontend is organized using a component-based architecture with reusable UI elements:

- **Layout Components**: Header, Footer, Navigation
- **Page Components**: Home, Services, Products, Process, About, Contact
- **Section Components**: Hero, Features, Products, Process, FAQ, Contact Form
- **UI Components**: Cards, Buttons, Forms, Modals, etc.

Key components and their responsibilities:

| Component | Purpose |
|-----------|---------|
| `Header.tsx` | Main navigation and theme toggle |
| `ThemeToggle.tsx` | Switch between light and dark modes |
| `Products.tsx` | Display and filter product catalog |
| `Contact.tsx` | Contact information and inquiry form |
| `Process.tsx` | Visual representation of electroplating process |

### Routing

The application uses `wouter` for client-side routing, which is a lightweight alternative to React Router:

```typescript
// App.tsx routing configuration
<Switch>
  <Route path="/" component={Home} />
  <Route path="/services" component={ServicesPage} />
  <Route path="/products" component={ProductsPage} />
  <Route path="/process" component={ProcessPage} />
  <Route path="/about" component={AboutPage} />
  <Route path="/contact" component={ContactPage} />
  <Route component={NotFound} />
</Switch>
```

### State Management

- **Theme State**: Context API is used for managing application theme (light/dark)
- **Form State**: React Hook Form handles form state and validation
- **Server State**: TanStack Query manages server data fetching, caching, and synchronization

### Styling

The project uses Tailwind CSS with custom theming for styling components:

- Custom color palette based on Better Plating's brand identity (blue, yellow, black, green)
- Responsive design with mobile-first approach
- Dark mode support with separate color schemes
- Component-level styling with utility classes

Custom CSS variables in `index.css` define the color system:

```css
:root {
  /* Base colors */
  --background: 0 0% 100%;
  --foreground: 220 20% 10%;
  
  /* Brand colors - Better Plating */
  --primary: 210 100% 30%;         /* Blue */
  --secondary: 45 100% 45%;        /* Gold/yellow */
  --accent: 142 71% 35%;           /* Green */
  
  /* Metal and zinc finishes */
  --metallic: 228 10% 67%;
  --metallic-light: 228 10% 83%;
  --metallic-dark: 228 10% 40%;
}
```

### Theme System

(Currently not fully implemented)
The theme system uses React Context API to provide theme information throughout the application:

```typescript
// Theme Provider implementation
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Initialize from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  // Theme toggle function
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };
  
  // Rest of implementation...
}
```

## Backend

### API Endpoints

The backend provides the following RESTful API endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/inquiries` | POST | Submit a new customer inquiry |
| `/api/inquiries` | GET | Retrieve all inquiries (admin only) |
| `/api/inquiries/:id` | GET | Retrieve a specific inquiry by ID (admin only) |

### Data Storage

The application uses in-memory storage for demonstration purposes:

```typescript
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private userCurrentId: number;
  private inquiryCurrentId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.userCurrentId = 1;
    this.inquiryCurrentId = 1;
  }
  
  // Implementation of storage methods...
}
```

In a production environment, this would be replaced with a persistent database such as PostgreSQL, MongoDB, or similar.

### Schema

The data schema is defined using Drizzle ORM with Zod validation:

```typescript
// Inquiries table schema
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

// Inquiry insertion schema with Zod validation
export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  service: true,
  message: true,
});
```

## Features Implementation

### Contact Form

The contact form is implemented using React Hook Form with Zod validation:

```typescript
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  },
});
```

Form submission is handled by TanStack Query's mutation hooks, which manage loading states and error handling:

```typescript
const mutation = useMutation({
  mutationFn: submitInquiry,
  onSuccess: () => {
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your inquiry! We will contact you shortly.",
    });
    form.reset();
  },
  onError: (error) => {
    toast({
      title: "Error",
      description: "There was a problem submitting your inquiry. Please try again.",
      variant: "destructive",
    });
  },
});
```

### Dark/Light Mode

The dark/light mode toggle is implemented using a combination of:

1. React Context for state management
2. Local Storage for persistence
3. CSS variables for styling
4. Tailwind CSS's dark mode for component styling

The toggle button updates the theme context, which then applies the appropriate CSS classes and stores the preference in localStorage.

### Product Filtering

The product filtering system uses React state to track the active filter category:

```typescript
const [filter, setFilter] = useState<FilterCategory>('all');

const filteredProducts = products.filter(product => 
  filter === 'all' || product.category === filter
);
```

Filter controls update this state, which then filters the displayed products dynamically.

### Animation Effects

The website uses various animation effects to enhance the user experience:

- Intersection Observer API for scroll-triggered animations
- CSS transitions for hover effects
- CSS animations for loading and appearing elements

Example implementation:

```typescript
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elements = processRef.current?.querySelectorAll('.process-step');
        elements?.forEach((el, i) => {
          setTimeout(() => {
            el.classList.remove('opacity-0');
          }, i * 200);
        });
      }
    });
  }, { threshold: 0.1 });
  
  if (processRef.current) {
    observer.observe(processRef.current);
  }
  
  return () => {
    if (processRef.current) {
      observer.unobserve(processRef.current);
    }
  };
}, []);
```

## Performance Optimizations

The website includes several performance optimizations:

- Code splitting via React.lazy() and Suspense
- Efficient re-rendering with proper React hooks usage
- Optimized images for faster loading
- CSS transitions instead of JavaScript animations where possible
- Minimal dependencies to reduce bundle size

## SEO Considerations

SEO has been implemented through:

- React Helmet for managing document head
- Semantic HTML5 elements
- Descriptive meta tags for each page
- Proper heading hierarchy
- Alt text for images
- Responsive design (mobile-friendly)
- Fast loading times

## Accessibility

The website follows accessibility best practices:

- Proper contrast ratios for text readability
- Keyboard navigation support
- Semantic HTML5 elements
- ARIA attributes where needed
- Focus management for interactive elements
- Alternative text for images

## Future Enhancements

Potential future enhancements for the website:

1. **Email Integration**: Add SendGrid API integration to email inquiries to staff
2. **Authentication**: Add admin login for inquiry management
3. **Online Quoting**: Develop an online quote calculator based on specifications
4. **Blog/News Section**: Add a blog section for industry news and company updates
5. **Image Gallery**: Expand the product gallery with lightbox functionality
6. **Testimonials**: Add a customer testimonials section
7. **Multi-language Support**: Add support for multiple languages
8. **Analytics**: Integrate with Google Analytics or similar for visitor tracking
9. **CMS Integration**: Add a content management system for easier updates
10. **Project Portfolio**: Showcase completed projects and case studies
