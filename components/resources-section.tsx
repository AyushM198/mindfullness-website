import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, BookOpen, Video } from "lucide-react"

export function ResourcesSection() {
  const resources = [
    {
      icon: Download,
      title: "Download Guide (PDF)",
      description: "Complete parent guide to mindfulness",
    },
    {
      icon: Video,
      title: "7 Day Free Trial",
      description: "Try all features risk-free",
    },
    {
      icon: BookOpen,
      title: "Exercises Pack",
      description: "Printable mindfulness activities",
    },
  ]

  return (
    <section className="py-16 lg:py-26 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto lg:px-22">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Parent & Teacher Hub</h2>
          <p className="text-muted-foreground max-w-full mx-auto">
            Access helpful resources to support your child's mindfulness practice at home and school.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <resource.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Access Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
