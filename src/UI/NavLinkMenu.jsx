import { NavLink } from "react-router-dom";

function NavLinkMenu({ to, children }) {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "text-gray-800 font-semibold" : "text-gray-700"
            }
            to={to}>
            {children}
        </NavLink>
    );
}

export default NavLinkMenu;
