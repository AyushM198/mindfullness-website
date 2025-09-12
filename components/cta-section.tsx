"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-left lg:px-12">
        <Card className="p-8 md:p-12 border-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Start Your Child&apos;s Mindfulness Journey
            </h2>

            <p className="text-muted-foreground text-lg max-w-full mx-auto lg:mb-6">
              Try it free. Build calm, focus, and kindness—one small practice a day.
            </p>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-left">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl"
              >
                Create Account
              </Button>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl"
              >
                Download App
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
