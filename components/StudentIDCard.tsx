
import { Download, QrCode } from 'lucide-react'
interface StudentIDCardProps {
  student: {
    id: string
    name: string
    class: string
    photo: string
    year: string
  }
}
export function StudentIDCard({ student }: StudentIDCardProps) {
  const handleDownloadPDF = () => {
    // Simulation de téléchargement PDF
    alert('Génération de la carte scolaire en PDF...')
  }
  return (
    <div className="max-w-sm">
      <div className="bg-linear-to-br from-[#0f3d6e] to-[#1e5a9e] rounded-2xl p-6 shadow-2xl border-4 border-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-4 pb-4 border-b border-white/20">
          <h3 className="text-[#fbbf24] font-bold text-lg">ÉCOLE PRIMAIRE</h3>
          <h2 className="text-white font-bold text-xl">LE TRIANGLE DIVIN</h2>
          <p className="text-blue-200 text-xs">Cococodji, Bénin</p>
        </div>

        {/* Content */}
        <div className="relative z-10 flex gap-4 mb-4">
          {/* Photo */}
          <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-white shadow-lg shrink-0">
            <img
              src={student.photo}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-white">
            <div className="mb-2">
              <p className="text-xs text-blue-200 uppercase tracking-wide">
                Élève
              </p>
              <p className="font-bold text-lg leading-tight">{student.name}</p>
            </div>
            <div className="mb-2">
              <p className="text-xs text-blue-200">Matricule</p>
              <p className="font-mono font-bold">{student.id}</p>
            </div>
            <div>
              <p className="text-xs text-blue-200">Classe</p>
              <p className="font-bold">{student.class}</p>
            </div>
          </div>
        </div>

        {/* QR Code & Year */}
        <div className="relative z-10 flex justify-between items-end">
          <div className="bg-white p-2 rounded-lg">
            <QrCode className="h-12 w-12 text-[#0f3d6e]" />
          </div>
          <div className="text-right">
            <p className="text-[#fbbf24] font-bold text-sm">Année scolaire</p>
            <p className="text-white font-bold">{student.year}</p>
          </div>
        </div>

        {/* Signature */}
        <div className="relative z-10 mt-4 pt-4 border-t border-white/20 text-center">
          <p className="text-blue-200 text-xs italic">Le Directeur</p>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="w-full mt-4 bg-[#fbbf24] text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 shadow-lg"
      >
        <Download className="h-5 w-5" />
        Télécharger la carte PDF
      </button>
    </div>
  )
}
