import { useState } from 'react'
import { Wand2, Save, RefreshCw } from 'lucide-react'
interface AppreciationGeneratorProps {
  studentName: string
  average: number
  strengths: string[]
  weaknesses: string[]
}
export function AppreciationGenerator({
  studentName,
  average,
  strengths,
  weaknesses,
}: AppreciationGeneratorProps) {
  const generateAppreciation = () => {
    let base = ''
    if (average >= 16)
      base = `Excellent travail de ${studentName} ce trimestre. Les résultats sont très satisfaisants.`
    else if (average >= 12)
      base = `Bon travail dans l'ensemble pour ${studentName}. Des efforts sont visibles.`
    else if (average >= 10)
      base = `Travail passable. ${studentName} doit redoubler d'efforts pour progresser.`
    else
      base = `Trimestre difficile pour ${studentName}. Un suivi personnalisé est nécessaire.`
    const strengthText =
      strengths.length > 0 ? ` Points forts en ${strengths.join(' et ')}.` : ''
    const weaknessText =
      weaknesses.length > 0
        ? ` Attention aux lacunes en ${weaknesses.join(' et ')}.`
        : ''
    return `${base}${strengthText}${weaknessText} Continuez vos efforts !`
  }
  const [text, setText] = useState(generateAppreciation())
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-gray-800 flex items-center gap-2">
          <Wand2 className="h-4 w-4 text-purple-500" />
          Générateur d'appréciations
        </h4>
        <div className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">
          Moyenne: {average}/20
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-24 p-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-3 text-gray-600"
      />

      <div className="flex justify-between gap-2">
        <button
          onClick={() => setText(generateAppreciation())}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <RefreshCw className="h-3 w-3" /> Régénérer
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-[#0f3d6e] hover:bg-[#1e5a9e] rounded-lg transition-colors">
          <Save className="h-3 w-3" /> Sauvegarder
        </button>
      </div>
    </div>
  )
}
