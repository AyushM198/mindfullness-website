// "use client"
// import { Pointer } from "@/components/magicui/pointer";
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/journeyCard"
// // import { JourneyCard } from "@/components/ui/journey-card" // 👈 import reusable card

// export function HeroSection() {
//   return (
//     <section className="pt-28 lg:pt-50 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-[3fr_2fr] gap-6 items-center lg:px-14">
//           {/* Left Content */}
//           <div className="space-y-8 animate-fade-in-up">
//             <div className="space-y-2">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-balance leading-tight max-w-full mr-6">
//                 Mindfulness & <br />
//                 <span className="text-primary">Meditation</span> for Kids{" "}
//                 <span className="text-accent">(4-14)</span>
//               </h1>

//               <p className="text-lg text-muted-foreground text-pretty max-w-full mr-14">
//                 Fun, story-based meditations that build focus, kindness, and confidence.
//                 Safe, ad-free, and crafted with child-development experts.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-2xl">
//                 Start Free trial
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-4 py-3 bg-transparent rounded-2xl"
//               >
//                 Explore Program
//               </Button>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-4">
//               {[
//                 { label: "Improves", emoji: "🧠", value: "Focus" },
//                 { label: "Reduces", emoji: "😌", value: "Stress" },
//                 { label: "Better", emoji: "💤", value: "Sleep" },
//                 { label: "Builds", emoji: "❤️", value: "Empathy" },
//               ].map((tag, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-2xl shadow-sm px-5 py-4 flex flex-col items-start text-center"
//                 >
//                   <span className="text-sm text-muted-foreground">{tag.label}</span>
//                   <div className="flex items-center gap-2">
//                     <span className="text-lg">{tag.emoji}</span>
//                     <span className="font-bold text-lg">{tag.value}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content - Journey Card */}
//           <div className="relative w-full lg:h-[480px]"> {/* Set height as needed */}
//             {/* Background Image */}
//             <img
//               src="/04.jpeg"
//               alt="Kids"
//               className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg "
//             />

//             {/* Card */}
//             <div className="relative z-10 animate-float -rotate-6 p-4 lg:top-59 lg:right-14">
//               <Card
//                 sessions={[
//                   { emoji: "🐉", text: "Dragon Breath (3 min)" },
//                   { emoji: "🦋", text: "Butterfly Body Scan (5 min)" },
//                   { emoji: "🌙", text: "Sleep Story: Star Boat (7 min)" },
//                 ]}
//               />
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full animate-pulse"></div>
//             <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-pulse delay-1000"></div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


"use client"
import { Pointer } from "@/components/magicui/pointer";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/journeyCard"
import { motion } from "motion/react";

// 👇 import lucide-react icons
import { Brain, Waves, Moon, Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-28 lg:pt-50 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-6 items-center lg:px-14">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <h1 className="indie-flower-regular text-4xl sm:text-5xl lg:text-6xl font-medium text-balance leading-tight max-w-full mr-6">
                Mindfulness & <br />
                <span className="text-primary">Meditation</span> for Kids{" "}
                <span className="text-accent">(4-14)</span>
              </h1>

              <p className="text-lg text-muted-foreground text-pretty max-w-full mr-14">
                Fun, story-based meditations that build focus, kindness, and confidence.
                Safe, ad-free, and crafted with child-development experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-2xl">
                Start Free trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-4 py-3 bg-transparent rounded-2xl"
              >
                Explore Program
              </Button>
            </div>

            {/* Tags with Pointer */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Improves", emoji: "🧠", value: "Focus", icon: <Brain className="w-6 h-6 text-purple-500" /> },
                { label: "Reduces", emoji: "😌", value: "Stress", icon: <Waves className="w-6 h-6 text-blue-500" /> },
                { label: "Better", emoji: "💤", value: "Sleep", icon: <Moon className="w-6 h-6 text-yellow-500" /> },
                { label: "Builds", emoji: "❤️", value: "Empathy", icon: <Heart className="w-6 h-6 text-pink-500 fill-pink-500" /> },
              ].map((tag, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white rounded-2xl shadow-sm px-5 py-4 flex flex-col items-start text-center transition-transform duration-300 group-hover:scale-105">
                    <span className="text-sm text-muted-foreground">{tag.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{tag.emoji}</span>
                      <span className="font-bold text-lg">{tag.value}</span>
                    </div>
                  </div>

                  {/* Pointer with motion + lucide-react icon */}
                  <Pointer>
                    <motion.div
                      animate={{
                        scale: [0.9, 1.1, 0.9],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {tag.icon}
                    </motion.div>
                  </Pointer>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Journey Card */}
          <div className="relative w-full lg:h-[480px]">
            <img
              src="/04.jpeg"
              alt="Kids"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
            />

            <div className="relative z-10 animate-float -rotate-6 p-4 lg:top-59 lg:right-14">
              <Card
                sessions={[
                  { emoji: "🐉", text: "Dragon Breath (3 min)" },
                  { emoji: "🦋", text: "Butterfly Body Scan (5 min)" },
                  { emoji: "🌙", text: "Sleep Story: Star Boat (7 min)" },
                ]}
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
