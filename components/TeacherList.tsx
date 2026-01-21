
import { RefreshCw, Plus } from 'lucide-react'
const teachers = [
  {
    id: 1,
    name: 'Oriel E.',
    class: '(CM1/B)',
    id_num: '51518451',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Audrey K.',
    class: '(CE2)',
    id_num: '51516351',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Matthieu V.',
    class: '(CP/C)',
    id_num: '51518651',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Seliou O.',
    class: '(CI/A)',
    id_num: '51516551',
    image:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Salim B.',
    class: '(CM2/B)',
    id_num: '51516851',
    image:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Penuel K.',
    class: '(CE1)',
    id_num: '51516851',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Damien A.',
    class: '(CI/B)',
    id_num: '51516751',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
export function TeacherList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Liste des enseignants
          </h3>
          <RefreshCw className="h-4 w-4 text-gray-400 cursor-pointer hover:rotate-180 transition-transform" />
        </div>

        <div className="flex justify-between items-center gap-2">
          <button className="bg-[#0f3d6e] text-white px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1 hover:bg-[#1e5a9e] transition-colors">
            Ajouter <Plus className="h-3 w-3" />
          </button>
          <button className="bg-[#fbbf24] text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-orange-500 transition-colors">
            Voir plus
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="h-10 w-10 rounded-full object-cover border border-gray-200"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-semibold text-[#0f3d6e] truncate">
                    {teacher.name}
                  </p>
                  <span className="text-xs font-medium text-[#0f3d6e] bg-blue-50 px-2 py-0.5 rounded-full">
                    {teacher.class}
                  </span>
                </div>
                <p className="text-xs text-orange-400 font-medium">
                  {teacher.id_num}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
