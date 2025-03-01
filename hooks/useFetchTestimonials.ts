import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  email: string;
  body: string;
  rating: number;
}

export function useFetchTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        // Take only the first 6 testimonials and add random ratings
        const processedData = data.slice(0, 6).map((item: Testimonial) => ({
          ...item,
          name: item.name.split(" ")[0], // Just use the first name
          rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
        }));

        setTestimonials(processedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
}