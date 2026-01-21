import { TrendingDown, BookOpen } from 'lucide-react';

interface StudentDifficultyCardProps {
  name: string;
  className: string;
  subject: string;
  dropPercentage: number;
  absences: number;
  onViewRecommendations: () => void;
}

export function StudentDifficultyCard({
  name, className, subject, dropPercentage, absences, onViewRecommendations,
}: StudentDifficultyCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold text-sm">
            {name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
            <p className="text-xs text-gray-500">{className}</p>
          </div>
        </div>
        <div className="bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
          <TrendingDown className="h-3 w-3" /> -{dropPercentage}%
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Matière en difficulté:</span>
          {/* Correction conflit : on garde uniquement text-orange-700 */}
          <span className="font-medium bg-orange-50 px-2 py-0.5 rounded text-orange-700">
            {subject}
          </span>
        </div>
        {absences > 0 && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Absences injustifiées:</span>
            <span className={`font-medium ${absences >= 3 ? 'text-red-600' : 'text-orange-500'}`}>
              {absences} absences
            </span>
          </div>
        )}
      </div>

      <button
        onClick={onViewRecommendations}
        className="w-full py-2 bg-white border border-blue-200 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
      >
        <BookOpen className="h-3 w-3" /> Voir recommandations
      </button>
    </div>
  );
}