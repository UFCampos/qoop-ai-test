import { useEffect, useState } from "react";
import { analyzeSentiment, SentimentAnalysis } from "@/app/actions/testimonialAnalysis";

interface Testimonial {
  id: number;
  name: string;
  email: string;
  body: string;
  rating: number;
  sentiment?: SentimentAnalysis;
}

interface ApiResponse {
  id: number;
  name: string;
  email: string;
  body: string;
}

export function useFetchTestimonials(lang: "en" | "es") {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [analyzingIds, setAnalyzingIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data: ApiResponse[] = await response.json();

        // Take only the first 6 testimonials and add random ratings
        const processedData = data.slice(0, 6).map((item) => ({
          ...item,
          name: item.name.split(" ")[0] + " " + item.name.split(" ")[1][0] + ".",
          rating: Math.ceil(Math.random() * 2) + 3, // Random rating between 3-5
        }));

        setTestimonials(processedData);

        // Analyze sentiment for each testimonial
        processedData.forEach(async (testimonial) => {
          await analyzeSentimentForTestimonial(testimonial.id, testimonial.body, testimonial.rating);
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const analyzeSentimentForTestimonial = async (id: number, text: string, rating: number) => {
    setAnalyzingIds((prev) => new Set(prev).add(id));

    try {
      const sentiment = await analyzeSentiment(text, rating, lang);
      setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, sentiment } : t)));
    } catch (error) {
      setError("Failed to analyze sentiment for testimonial with ID " + id);
      console.error("Error analyzing sentiment:", error);
    } finally {
      setAnalyzingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  return { testimonials, loading, error, analyzingIds };
}