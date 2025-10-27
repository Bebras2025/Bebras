import { BookOpen } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="text-3xl">🦫</div>
            <div>
              <h1 className="text-xl font-bold">Bebras 2025 11º-12º</h1>
              <p className="text-xs text-teal-100">Castor Informático</p>
            </div>
          </button>

          <nav className="flex gap-4">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'bg-white text-emerald-600 font-semibold'
                  : 'hover:bg-teal-700'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                currentPage === 'about'
                  ? 'bg-white text-emerald-600 font-semibold'
                  : 'hover:bg-teal-700'
              }`}
            >
              <BookOpen size={18} />
              Sobre
            </button>
            <button
              onClick={() => onNavigate('computational-thinking')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'computational-thinking'
                  ? 'bg-white text-emerald-600 font-semibold'
                  : 'hover:bg-teal-700'
              }`}
            >
              Pensamento Computacional
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
