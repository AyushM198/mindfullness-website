import { Card } from "@/components/ui/card"
import { Brain, Heart, Sparkles } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Brain,
      title: "Reduce Anxiousness",
      description: "Help children manage worry and stress through calming breathing exercises and mindful activities.",
    },
    {
      icon: Heart,
      title: "Good for the Feelings",
      description: "Develop emotional intelligence and learn healthy ways to express and understand emotions.",
    },
    {
      icon: Sparkles,
      title: "Develop a Healthier",
      description: "Build positive habits and mindful awareness that support overall mental and physical wellbeing.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:px-20 lg:pt-10">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Mindery Kids?</h2>
          <p className="text-muted-foreground max-w- mx-auto">
            Children learn best through play and stories. Our sessions blend gentle<br/> breathing, guided imagery, and music to make mindfulness enjoyable and <br/>effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card "
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
