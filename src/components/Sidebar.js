import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to="/" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/sales" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active">Ventas</NavLink>
                </li>
                <li>
                    <NavLink to="/clients" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active">Clientes</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar