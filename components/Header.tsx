import { Search, Bell, Menu, ChevronDown } from 'lucide-react'

interface HeaderProps {
  role: string
  onMenuClick: () => void
}

export function Header({ role, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white h-16 px-4 md:px-8 flex items-center justify-between shadow-sm sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={onMenuClick} className="lg:hidden p-2 hover:bg-gray-100 rounded-md">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>

        <div className="relative w-full max-w-xl hidden md:block">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 text-sm bg-gray-50"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">3</span>
        </div>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{role}</p>
            <p className="text-sm font-black text-[#0f3d6e]">Anna_Shud</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-orange-100 border-2 border-white shadow-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="avatar" />
          </div>
          <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600" />
        </div>
      </div>
    </header>
  )
}