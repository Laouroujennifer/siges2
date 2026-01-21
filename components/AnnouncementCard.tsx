import { Calendar, ChevronRight } from 'lucide-react'
interface AnnouncementCardProps {
  title: string
  date: string
  preview: string
  category: string
}
export function AnnouncementCard({
  title,
  date,
  preview,
  category,
}: AnnouncementCardProps) {
  return (
    <div className="group bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wide">
          {category}
        </span>
        <div className="flex items-center text-slate-400 text-xs">
          <Calendar size={14} className="mr-1" />
          {date}
        </div>
      </div>
      <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-slate-500 text-sm line-clamp-2 mb-4">{preview}</p>
      <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
        Read more <ChevronRight size={16} className="ml-1" />
      </div>
    </div>
  )
}
