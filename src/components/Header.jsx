import { NavLink, useLocation } from "react-router-dom";
import desafios from '../routes/desafios.config';

const Header = () => {
  const location = useLocation();

  // Busca o desafio atual pela rota
  const desafioAtual = desafios.find(({ path }) =>
    location.pathname.includes('/desafio/' + path)
  );
  console.log(desafioAtual);
  

  // Título do desafio
  const title = desafioAtual ? desafioAtual.label : '';

  // Menus do desafio atual (se existirem)
  const menus = desafioAtual && Array.isArray(desafioAtual.menu) ? desafioAtual.menu : [];

  return (
    <nav className="flex justify-start items-center space-x-4 bg-gray-800 p-2 rounded-lg">
      <a href="#">
        <h4 className="px-10 py-2 mr-4 text-gray-400 text-xl">{title}</h4>
      </a>

      {menus.map(({ path, label }) => (
        <NavLink
          key={path}
          to={desafioAtual.path +'/'+path}
          className={({ isActive }) =>
            isActive
              ? "font-light rounded-lg px-3 py-2 text-gray-800 bg-gray-200 hover:bg-gray-300 hover:text-gray-900"
              : "font-light rounded-lg px-3 py-2 text-white hover:bg-gray-200 hover:text-gray-900"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;