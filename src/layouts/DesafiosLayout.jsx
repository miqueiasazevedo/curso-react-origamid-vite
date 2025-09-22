import { Link, Outlet } from 'react-router-dom'; 
import desafios from '../routes/desafios.config';
import Header from '../components/Header';

export default function DesafiosLayout() {

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h1 className="text-xl font-bold mb-6">Desafios</h1>
        <nav className="flex flex-col gap-2">
          {desafios.map(({ path, label }) => {
            return <Link key={path} to={path} className="hover:bg-gray-700 rounded px-2 py-1">{label}</Link>
          })}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col p-4">
        {/* Header */}
       <Header />

        {/* Conteúdo */}
        <main className="flex-1 bg-gray-100  overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
