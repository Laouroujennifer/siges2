import { ArrowRight, type LucideIcon } from 'lucide-react' // Correction de l'import ici

interface QuickActionCardProps {
  title: string
  description: string
  icon: LucideIcon // On utilise le type correct ici
  color: 'blue' | 'green' | 'amber' | 'purple'
  onClick?: () => void
}

export function QuickActionCard({
  title,
  description,
  icon: Icon, // On garde Icon avec la majuscule pour l'utiliser comme composant
  color,
  onClick,
}: QuickActionCardProps) {
  const gradients = {
    blue: 'from-blue-500 to-blue-400 shadow-blue-200',
    green: 'from-emerald-500 to-emerald-400 shadow-emerald-200',
    amber: 'from-amber-500 to-amber-400 shadow-amber-200',
    purple: 'from-purple-500 to-purple-400 shadow-purple-200',
  }

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${gradients[color]} p-6 text-left shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl w-full h-full`}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4 group-hover:bg-white/30 transition-colors">
          <Icon className="text-white" size={24} />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-white/90 text-sm font-medium">{description}</p>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
          <ArrowRight className="text-white" size={20} />
        </div>
      </div>

      {/* Cercles décoratifs */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-all group-hover:bg-white/20" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-black/5 blur-2xl" />
    </button>
  )
}