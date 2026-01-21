import type { LucideIcon } from 'lucide-react'; // Importation du type correct

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon; // Utilisation du type LucideIcon
  iconColor: string;
  trend: string;
  trendColor?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon, // On le renomme Icon avec une majuscule pour l'utiliser comme composant
  iconColor,
  trend,
  trendColor = 'text-orange-500',
}: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        </div>
        {/* On applique la couleur dynamiquement */}
        <div className={`p-3 rounded-full ${iconColor} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${iconColor.replace('bg-', 'text-')}`} />
        </div>
      </div>
      <p className="text-xs text-gray-500">
        <span className={`${trendColor} font-medium`}>{trend}</span> depuis la
        semaine dernière
      </p>
    </div>
  );
}