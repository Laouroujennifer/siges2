
import { MoreHorizontal } from 'lucide-react'
interface Student {
  id: string
  name: string
  grade: string
  status: 'Present' | 'Absent' | 'Late'
  parent: string
  lastUpdate: string
}
const data: Student[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    grade: '5th Grade',
    status: 'Present',
    parent: 'Sarah Thompson',
    lastUpdate: '2 mins ago',
  },
  {
    id: '2',
    name: 'Liam Wilson',
    grade: '4th Grade',
    status: 'Late',
    parent: 'Mike Wilson',
    lastUpdate: '15 mins ago',
  },
  {
    id: '3',
    name: 'Olivia Davis',
    grade: '5th Grade',
    status: 'Present',
    parent: 'Jenny Davis',
    lastUpdate: '1 hour ago',
  },
  {
    id: '4',
    name: 'Noah Martinez',
    grade: '3rd Grade',
    status: 'Absent',
    parent: 'Carlos Martinez',
    lastUpdate: '3 hours ago',
  },
  {
    id: '5',
    name: 'Ava Robinson',
    grade: '4th Grade',
    status: 'Present',
    parent: 'David Robinson',
    lastUpdate: '4 hours ago',
  },
]
export function DataTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-800">
          Recent Student Activity
        </h3>
        <button className="text-sm text-primary font-medium hover:text-blue-600">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 text-slate-500 text-sm uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold rounded-tl-lg">
                Student Name
              </th>
              <th className="px-6 py-4 font-semibold">Grade</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Parent Contact</th>
              <th className="px-6 py-4 font-semibold rounded-tr-lg">
                Last Update
              </th>
              <th className="px-6 py-4 font-semibold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((student, index) => (
              <tr
                key={student.id}
                className={`hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mr-3">
                      {student.name.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-700">
                      {student.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 text-sm">
                  {student.grade}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${student.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : student.status === 'Absent' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-600 text-sm">
                  {student.parent}
                </td>
                <td className="px-6 py-4 text-slate-400 text-sm">
                  {student.lastUpdate}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
