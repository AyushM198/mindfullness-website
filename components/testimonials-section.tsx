import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Emma Johnson",
      role: "Mother of 3",
      rating: 5,
      text: "My kids absolutely love their daily mindfulness sessions. It's become a cherished part of our bedtime routine.",
      avatar: "EJ",
    },
    {
      name: "Michael Chen",
      role: "Father & Teacher",
      rating: 5,
      text: "As both a parent and educator, I can see the real impact this has on children's emotional regulation and focus.",
      avatar: "MC",
    },
    {
      name: "Sarah Williams",
      role: "Single Mom",
      rating: 5,
      text: "The age-appropriate content is perfect. My 6-year-old daughter has learned to manage her big emotions so well.",
      avatar: "SW",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto lg:px-26">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold mb-4">What Families Say</h2>
          <p className="text-muted-foreground max-w-full mx-auto">
            Hear from parents who have seen the positive impact of mindfulness on their children.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
