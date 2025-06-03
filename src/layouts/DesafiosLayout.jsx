import { Link, Outlet } from 'react-router-dom';

import  desafios from '../routes/desafios.config';

export default function DesafiosLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h1 className="text-xl font-bold mb-6">Desafios</h1>
        <nav className="flex flex-col gap-2">
          {desafios.map(({ path, label }) => {
            return <Link to= {path} className="hover:bg-gray-700 rounded px-2 py-1"> {label} </Link>
          })
          }
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-4 py-2">
          <h2 className="text-lg font-semibold">Bem-vindo(a)</h2>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
