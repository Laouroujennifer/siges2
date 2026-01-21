
import { BookOpen, CheckCircle, Clock } from 'lucide-react'
interface Exercise {
  id: number
  title: string
  subject: string
  difficulty: 'Facile' | 'Moyen' | 'Difficile'
  duration: string
}
interface ExerciseRecommendationProps {
  studentName: string
  subject: string
  onClose: () => void
}
const MOCK_EXERCISES: Exercise[] = [
  {
    id: 1,
    title: 'Révision des fractions simples',
    subject: 'Mathématiques',
    difficulty: 'Facile',
    duration: '15 min',
  },
  {
    id: 2,
    title: 'Problèmes de proportionnalité',
    subject: 'Mathématiques',
    difficulty: 'Moyen',
    duration: '20 min',
  },
  {
    id: 3,
    title: 'Géométrie : Les triangles',
    subject: 'Mathématiques',
    difficulty: 'Moyen',
    duration: '25 min',
  },
  {
    id: 4,
    title: 'Conjugaison : Le présent',
    subject: 'Français',
    difficulty: 'Facile',
    duration: '15 min',
  },
  {
    id: 5,
    title: 'Lecture compréhension',
    subject: 'Français',
    difficulty: 'Moyen',
    duration: '30 min',
  },
]
export function ExerciseRecommendation({
  studentName,
  subject,
  onClose,
}: ExerciseRecommendationProps) {
  const recommendations = MOCK_EXERCISES.filter(
    (ex) => ex.subject === subject || subject === 'Général',
  )
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Exercices Recommandés
          </h3>
          <p className="text-sm text-gray-500">
            Pour {studentName} • {subject}
          </p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          ×
        </button>
      </div>

      <div className="space-y-3 mb-6">
        {recommendations.map((ex) => (
          <div
            key={ex.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${ex.subject === 'Mathématiques' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}
              >
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-900">
                  {ex.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                  <span
                    className={`px-1.5 py-0.5 rounded ${ex.difficulty === 'Facile' ? 'bg-green-100 text-green-700' : ex.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {ex.difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {ex.duration}
                  </span>
                </div>
              </div>
            </div>
            <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
              <CheckCircle className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          Fermer
        </button>
        <button className="px-4 py-2 text-sm bg-[#fbbf24] text-white font-medium rounded-lg hover:bg-orange-500 transition-colors">
          Assigner la sélection
        </button>
      </div>
    </div>
  )
}
