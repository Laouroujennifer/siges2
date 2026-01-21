import { useState } from 'react'
import { BrainCircuit, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { StudentDifficultyCard } from './StudentDifficultyCard'
import { ExerciseRecommendation } from './ExerciseRecommendation'
const STUDENTS_IN_DIFFICULTY = [
  {
    id: 1,
    name: 'Obryan DADJO',
    class: 'CI/C',
    subject: 'Mathématiques',
    drop: 25,
    absences: 4,
  },
  {
    id: 2,
    name: 'Brooklyn SINZO',
    class: 'CE 2',
    subject: 'Français',
    drop: 22,
    absences: 1,
  },
  {
    id: 3,
    name: 'Kathryn MORA',
    class: 'CP/A',
    subject: 'Lecture',
    drop: 30,
    absences: 0,
  },
]
export function PedagogicalAssistant() {
  const [selectedStudent, setSelectedStudent] = useState<{
    name: string
    subject: string
  } | null>(null)
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-linear-to-r from-[#0f3d6e] to-[#1e5a9e] text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <BrainCircuit className="h-6 w-6 text-[#fbbf24]" />
          </div>
          <div>
            <h2 className="text-lg font-bold">
              Assistant Pédagogique Intelligent
            </h2>
            <p className="text-blue-100 text-sm">
              Analyse en temps réel des performances élèves
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <span className="font-bold text-gray-900">
              {STUDENTS_IN_DIFFICULTY.length}
            </span>{' '}
            élèves détectés
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            Système actif
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STUDENTS_IN_DIFFICULTY.map((student) => (
            <StudentDifficultyCard
              key={student.id}
              name={student.name}
              className={student.class}
              subject={student.subject}
              dropPercentage={student.drop}
              absences={student.absences}
              onViewRecommendations={() =>
                setSelectedStudent({
                  name: student.name,
                  subject: student.subject,
                })
              }
            />
          ))}
        </div>

        {selectedStudent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="max-w-lg w-full">
              <ExerciseRecommendation
                studentName={selectedStudent.name}
                subject={selectedStudent.subject}
                onClose={() => setSelectedStudent(null)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
