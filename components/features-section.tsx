import { Card } from "@/components/ui/card"
import { Shield, Users, Smartphone, HeadphonesIcon, Calendar, Award } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Ad-Free & Safe",
      description: "Child-first design with privacy controls and no external ads.",
    },
    {
      icon: Smartphone,
      title: "Rewards that Motivate",
      description: "Stars,badges,and gentle streaks encourage healthy habits-no pressure.",
    },
    {
      icon: Users,
      title: "Offline Access",
      description: "Download favorite sessions for anytime, anywhere mindfulness.",
    },
    
    {
      icon: HeadphonesIcon,
      title: "Sleep mode",
      description: "Fade-out music and bedtime stories to help kids unwind.",
    },
    {
      icon: Calendar,
      title: "Classroom Friendly",
      description: "Practice at your own pace with on-demand and live sessions.",
    },
    {
      icon: Award,
      title: "Multi-User Profiles",
      description: "Personalized experience for each child in the family.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:px-16 lg:py-12 ">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold mb-4">Built for Kids, Loved by Parents</h2>
          <p className="text-muted-foreground max-w-full mx-auto ">
            Everything you need to support your child's mindfulness journey in one comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card"
            >
              <div className="flex items-start gap-4">
                {/* <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div> */}
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
