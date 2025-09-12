import { Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 lg:px-12">
        
        {/* Left: Logo + tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <span className="font-semibold text-lg">Topmind Care</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Mindfulness for growing minds. © 2025 Mindery Kids.
          </p>
        </div>

        {/* Middle: Contact */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Contact</h3>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-purple-600 hover:underline flex items-center gap-1">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="#" className="text-sm text-purple-600 hover:underline flex items-center gap-1">
              <Youtube className="w-4 h-4" /> YouTube
            </a>
            <a href="#" className="text-sm text-purple-600 hover:underline flex items-center gap-1">
              <Twitter className="w-4 h-4" /> X
            </a>
          </div>
        </div>

        {/* Right: Legal */}
        <div className="flex flex-col items-center text-center md:items-end">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Legal</h3>
          <div className="flex gap-3">
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
