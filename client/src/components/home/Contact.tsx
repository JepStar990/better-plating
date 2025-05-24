import { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import Map from '@/components/ui/map';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string({ required_error: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export default function Contact() {
  const [formKey, setFormKey] = useState(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
     try {
      const formattedMessage = `
        Contact Details:
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Company: ${data.company || 'Not provided'}

        Service Interested In:
        ${data.service}

        Message:
        ${data.message}
      `.trim();

      const currentTime = new Date().toLocaleString();

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          time: currenttime,
          message: formattedMessage,
          email: data.email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS response:', response);

      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your inquiry! We will contact you shortly.",
      });
      form.reset();
      setFormKey(Date.now());
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Intersection Observer remains the same
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === formRef.current && entry.isIntersecting) {
          formRef.current?.classList.remove('opacity-0');
        }
        if (entry.target === infoRef.current && entry.isIntersecting) {
          infoRef.current?.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-16 bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reach out to us for more information or to request a quote for your zinc electroplating needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information (unchanged) */}
          <div ref={infoRef} className="animate-fadeInUp opacity-0">
            <Card className="bg-light dark:bg-dark-lighter rounded-lg shadow-md p-8 h-full">
              <CardContent className="p-0">
                <h3 className="text-2xl font-heading font-bold text-primary dark:text-secondary mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-secondary mr-4">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-dark dark:text-white mb-1">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        No 13 Ossewa Street <br />
                        Chloorkop, Kempton Park <br />
                        South Africa
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-secondary mr-4">
                      <i className="fas fa-phone text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-dark dark:text-white mb-1">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Manuel: <a href="tel:+270782269951" className="hover:text-primary dark:hover:text-secondary transition-colors">078 226 9951</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-secondary mr-4">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-dark dark:text-white mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="mailto:info@betterplating.co.za" className="hover:text-primary dark:hover:text-secondary transition-colors">info@betterplating.co.za</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-secondary mr-4">
                      <i className="fas fa-clock text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-dark dark:text-white mb-1">Business Hours</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 8:00 AM - 5:00 PM <br />
                        Saturday: 8:00 AM - 12:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Location Map */}
                <div className="mt-8">
                  <h4 className="text-lg font-heading font-bold text-dark dark:text-white mb-4">Our Location</h4>
                  <Map />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="animate-fadeInUp opacity-0 delay-200">
            <Card className="bg-light dark:bg-dark-lighter rounded-lg shadow-md p-8 h-full">
              <CardContent className="p-0">
                <h3 className="text-2xl font-heading font-bold text-primary dark:text-secondary mb-6">Request A Quote</h3>

                <Form {...form}>
                  <form key={formKey} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark dark:text-light">Your Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark dark:text-light">Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark dark:text-light">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark dark:text-light">Company Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark dark:text-light">Service Interested In *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary">
                                <SelectValue placeholder="Please select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="standard">Standard Zinc Plating</SelectItem>
                              <SelectItem value="heavy-duty">Heavy-Duty Galvanizing</SelectItem>
                              <SelectItem value="specialized">Specialized Plating</SelectItem>
                              <SelectItem value="other">Other Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark dark:text-light">Project Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={5}
                              className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary" 
                            />
                          </FormControl>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Please include information about your components, quantity, dimensions, and any specific requirements.
                          </p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark text-white dark:text-dark font-bold py-3 px-6 rounded-md transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
