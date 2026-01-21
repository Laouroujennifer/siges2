import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, GraduationCap, School, Calendar, CreditCard,
  Mail,  BrainCircuit, Mic, FileText, UserPlus,
  ClipboardList, MessageSquare, HelpCircle, History, type LucideIcon
} from 'lucide-react';
import logo from '../assets/logo.png';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
  highlight?: boolean;
}

interface SidebarProps {
  role?: 'admin' | 'teacher' | 'parent' | 'direction';
}

export function Sidebar({ role = 'admin' }: SidebarProps) {
  const location = useLocation();

  const getMenuItems = (): MenuItem[] => {
    const base: MenuItem[] = [{ icon: LayoutDashboard, label: 'Tableau de bord', path: `/dashboard/${role}` }];

    if (role === 'admin' || role === 'direction') {
      return [
        ...base,
        { icon: UserPlus, label: 'Inscriptions', path: '/dashboard/admin/enrollment' },
        { icon: Users, label: 'Gestion des élèves', path: '/dashboard/admin/students' },
        { icon: GraduationCap, label: 'Enseignants', path: '/dashboard/admin/teachers' },
        { icon: School, label: 'Gestion des classes', path: '/dashboard/admin/classes' },
        { icon: Calendar, label: 'Emploi du temps', path: '/dashboard/admin/schedule' },
        { icon: CreditCard, label: 'Gestion Financière', path: '/dashboard/admin/financial' },
        { icon: Mic, label: 'Messages Vocaux', path: '/dashboard/admin/voice', highlight: true },
        { icon: Mail, label: 'Messagerie', path: '/dashboard/admin/messages' },
        { icon: FileText, label: 'Bulletins', path: '/dashboard/admin/reports' },
        { icon: BrainCircuit, label: 'Assistant IA', path: '/dashboard/admin/ai-assistant', highlight: true },
      ];
    }

    if (role === 'teacher') {
      return [
        ...base,
        { icon: ClipboardList, label: 'Bulletin de notes', path: '/dashboard/teacher/grades' },
        { icon: Calendar, label: 'Emploi du temps', path: '/dashboard/teacher/schedule' },
        { icon: School, label: 'Ma classe', path: '/dashboard/teacher/class' },
        { icon: Users, label: 'Mes élèves', path: '/dashboard/teacher/students' },
        { icon: BrainCircuit, label: 'Assistant IA', path: '/dashboard/teacher/ai-assistant', highlight: true },
        { icon: Mail, label: 'Envoyer un mail', path: '/dashboard/teacher/mail' },
        { icon: MessageSquare, label: 'Envoyer un SMS', path: '/dashboard/teacher/sms' },
        { icon: HelpCircle, label: 'Support et aides', path: '/dashboard/teacher/support' },
      ];
    }

    if (role === 'parent') {
      return [
        ...base,
        { icon: ClipboardList, label: 'Bulletin de notes', path: '/dashboard/parent/grades' },
        { icon: Calendar, label: 'Emploi du temps', path: '/dashboard/parent/schedule' },
        { icon: FileText, label: 'Carte scolaire', path: '/dashboard/parent/school-card' },
        { icon: CreditCard, label: 'Paiements', path: '/dashboard/parent/payment' },
        { icon: History, label: 'Historique', path: '/dashboard/parent/history' },
        { icon: Mail, label: 'Envoyer un mail', path: '/dashboard/parent/mail' },
        { icon: MessageSquare, label: 'Envoyer un SMS', path: '/dashboard/parent/sms' },
        { icon: HelpCircle, label: 'Support et aides', path: '/dashboard/parent/support' },
      ];
    }
    return base;
  };

  return (
    <aside className="w-64 bg-[#0f3d6e] text-white flex flex-col h-screen shadow-2xl">
      <div className="p-6 flex items-center gap-3 border-b border-white/10 shrink-0">
        <div className="bg-green p-1 rounded-lg flex items-center justify-center overflow-hidden">
          <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
        </div>
        <div>
          <span className="text-lg font-bold block leading-none">School Admin</span>
          <span className="text-[10px] text-blue-300 uppercase tracking-widest font-medium">{role}</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {getMenuItems().map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
              ${location.pathname === item.path ? 'bg-[#3b82f6] text-white shadow-lg' : 
                item.highlight ? 'bg-white/10 text-[#fbbf24] hover:bg-white/20' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} className={location.pathname === item.path ? 'text-white' : item.highlight ? 'text-[#fbbf24]' : 'text-gray-400 group-hover:text-white'} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>

     
    </aside>
  );
}