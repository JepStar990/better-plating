import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

export default function Map() {
  return (
    <Card className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5332430845363!2d28.1999317!3d-26.1349765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95129bffffffff%3A0x9c547f4b3d2ff32a!2sOssewa%20St%2C%20Chloorkop%2C%20Kempton%20Park%2C%201619%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1625764302041!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Better Plating Location Map"
      ></iframe>
    </Card>
  );
}
