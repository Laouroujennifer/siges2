import { useState, type ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

type UserRole = 'admin' | 'teacher' | 'parent' | 'direction';

interface DashboardLayoutProps {
  children: ReactNode;
  role?: UserRole;
}

export function DashboardLayout({ children, role = 'admin' }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar Section */}
      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 lg:translate-x-0 lg:static lg:block ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar role={role} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header role={role} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}