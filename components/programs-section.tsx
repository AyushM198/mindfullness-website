import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProgramsSection() {
  const programs = [
    {
      title: "Little Explorers at 4-6",
      description:
        "Gentle introduction to mindfulness through playful activities, simple breathing exercises, and imaginative journeys.",
      image: "/3.jpeg",
      features: ["Story-based sessions", "Fun breathing games", "Simple body awareness"],
      ageGroup: "4-6 years",
    },
    {
      title: "Brave Thinkers 7-10",
      description:
        "Develop focus and emotional awareness through structured mindfulness practices and interactive exercises.",
      image: "/22.jpeg",
      features: ["Guided meditations", "Emotion regulation", "Focus training"],
      ageGroup: "7-10 years",
    },
    {
      title: "Calm & Mindful 11-14",
      description:
        "Advanced mindfulness techniques to help pre-teens navigate stress, relationships, and personal growth.",
      image: "/31.jpeg",
      features: ["Stress management", "Social awareness", "Self-reflection"],
      ageGroup: "11-14 years",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 lg:py-26 bg-muted/30">
      <div className="max-w-7xl mx-auto lg:px-18">
        <div className="text-left mb-12">
          <h2 className="text-5xl font-semibold mb-6">Programs for Every Age</h2>
          <p className="text-muted-foreground max-w-full mx-auto mb-20">
            Age-appropriate mindfulness programs designed to meet your child <br/> where they are in their development.
          </p>
        </div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{program.ageGroup}</Badge>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </div>

                <div className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Try Class</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
