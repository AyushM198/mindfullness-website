"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What ages is this for?",
      answer:
        "Our programs are designed for children aged 4-14, with age-appropriate content for different developmental stages.",
    },
    {
      question: "How long are the sessions?",
      answer:
        "Sessions range from 5-20 minutes depending on the age group and activity type, perfect for young attention spans.",
    },
    {
      question: "Is it safe for my child?",
      answer: "Yes, all content is COPPA compliant with robust parental controls and no advertising or data tracking.",
    },
    {
      question: "Can multiple kids use it?",
      answer: "Our Family plan supports up to 6 child profiles with individual progress tracking.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6  bg-muted/30  ">
      <div className="max-w-6xl mx-auto lg:px-12 lg:py-12">
        <div className="text-left mb-10">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Common questions from parents about our mindfulness programs.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 bg-card overflow-hidden">
              <button
                className="w-full lg:h-4 p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
