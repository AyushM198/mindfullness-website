import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const comparisons = [
    {
      category: "Content Quality",
      us: ["Age-appropriate content", "Expert-created sessions", "Regular updates"],
      others: ["Generic content", "Limited expertise", "Infrequent updates"],
    },
    {
      category: "Safety & Privacy",
      us: ["COPPA compliant", "Parental controls", "No ads or tracking"],
      others: ["Basic privacy", "Limited controls", "Ad-supported"],
    },
    {
      category: "User Experience",
      us: ["Child-friendly design", "Intuitive navigation", "Engaging animations"],
      others: ["Adult-focused UI", "Complex interface", "Static design"],
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto lg:px-16 ">
        <div className="text-left mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">Why Choose Mindery Kids Over Others?</h2>
          <p className="text-muted-foreground max-w-full mx-auto lg:mb-16">
            See how we compare to other mindfulness apps and platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 border border-transparent shadow-xs p-2 rounded-lg ">
          {comparisons.map((comparison, index) => (
            <Card key={index} className="p-6 lg:pt-1 border border-transparent shadow-2xl bg-card hover:scale-102 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-2 text-center border p-4 rounded-3xl bg-[#eef5fd]">{comparison.category}</h3>

              <div className="space-y-6">
                {/* Us */}
                <div>
                  <h4 className="font-medium text-primary mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Mindery Kids
                  </h4>
                  <ul className="space-y-2">
                    {comparison.us.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <Check className="w-3 h-3 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Others */}
                <div>
                  <h4 className="font-medium text-muted-foreground mb-3 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    Other Apps
                  </h4>
                  <ul className="space-y-2">
                    {comparison.others.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <X className="w-3 h-3 text-destructive flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
