import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for trying out mindfulness with your child",
      features: ["3 guided sessions", "Basic breathing exercises", "Progress tracking", "Mobile app access"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "£239",
      period: "/mo",
      description: "Complete access to all mindfulness programs",
      features: [
        "Unlimited sessions",
        "All age programs",
        "Live group sessions",
        "Parental dashboard",
        "Offline downloads",
        "Priority support",
      ],
      cta: "Start Trial",
      popular: true,
    },
    {
      name: "Family",
      price: "£499",
      period: "/mo",
      description: "Perfect for families with multiple children",
      features: [
        "Up to 6 child profiles",
        "All Premium features",
        "Family challenges",
        "Parent-child sessions",
        "Advanced analytics",
        "Dedicated support",
      ],
      cta: "Choose Family",
      popular: false,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-18">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto ">
            Start your child's mindfulness journey today with our flexible pricing options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 relative border-0 bg-card transition-all duration-300 shadow-lg hover:shadow-2xl ${
                plan.popular ? "ring-2 ring-primary scale-110" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
