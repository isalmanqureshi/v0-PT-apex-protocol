import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Tech Founder',
    content: 'The Catalyst Method transformed my approach. I reclaimed 15 hours weekly and tripled my output.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'CEO',
    content: 'Data-driven insights helped me identify my peak performance windows. Life-changing.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcus Williams',
    role: 'Executive Coach',
    content: 'Most comprehensive performance system I\'ve encountered. Highly recommend to all leaders.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Elite Performers</h2>
          <p className="text-xl text-muted-foreground">
            See how the Catalyst Method drives real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background border border-border rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-card">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
