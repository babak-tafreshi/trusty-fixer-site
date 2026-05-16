import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Mississauga, ON",
    rating: 5,
    quote: "Home Fixers renovated our kitchen on time and on budget. The team was clean, respectful, and the quality is outstanding. Highly recommend.",
  },
  {
    name: "David L.",
    location: "Toronto, ON",
    rating: 5,
    quote: "I joined the membership last spring. They caught a small roof issue before it became a disaster. Worth every penny.",
  },
  {
    name: "Priya R.",
    location: "Vaughan, ON",
    rating: 5,
    quote: "Booked a handyman to mount three TVs and assemble furniture. Showed up on time, did everything perfectly in two hours.",
  },
  {
    name: "Mike T.",
    location: "Oakville, ON",
    rating: 5,
    quote: "Finished our basement into a beautiful in-law suite. Communication was excellent throughout the entire build.",
  },
  {
    name: "Jennifer K.",
    location: "Markham, ON",
    rating: 5,
    quote: "The Elite membership has been amazing — fall maintenance was thorough, and the team explained everything they did.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-6xl">
      <CarouselContent className="-ml-4">
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="h-full rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default TestimonialsCarousel;
