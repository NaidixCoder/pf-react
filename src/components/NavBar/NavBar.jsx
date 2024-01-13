import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/img/headerLogo-white.png";

function NavBar() {
    const [isMobileNavExpanded, setMobileNavExpanded] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavExpanded(!isMobileNavExpanded);
    };

    return (
        <>
        <header className="bg-main py-6 px-4 md:py-6 md:px-12 flex justify-between items-center">
            <Link to={"/"}>
            <img className="h-10" src={Logo} alt="Logo Mati Infante" />
            </Link>

            {/* Navegación en versión de escritorio */}
            <nav className="hidden md:flex md:visible">
                <ul className="flex list-none gap-4">
                    <NavLink to={`/`} className="text-font uppercase cursor-pointer hover:text-second">Productos</NavLink>
                    <NavLink to={`/category/reeles`} className="text-font uppercase cursor-pointer hover:text-second">Reeles</NavLink>
                    <NavLink to={`/category/cañas`} className="text-font uppercase cursor-pointer hover:text-second">Cañas</NavLink>
                    <NavLink to={`/category/cajas`} className="text-font uppercase cursor-pointer hover:text-second">cajas</NavLink>
                    <NavLink to={`/category/señuelos`} className="text-font uppercase cursor-pointer hover:text-second">señuelos</NavLink>
                    {!isMobileNavExpanded && <CartWidget />} {/* Mostrar CartWidget solo si el menú móvil está expandido */}
                </ul>
            </nav>

            
            {!isMobileNavExpanded && 
                <div className="md:hidden">
                    <FaBars onClick={toggleMobileNav} className="text-white cursor-pointer text-[30px]" />
                </div>
            }    


            {isMobileNavExpanded && (
                <div className="md:hidden flex flex-col items-end gap-2">
                    <IoClose onClick={toggleMobileNav} className="text-red-600 cursor-pointer text-[20px]"/>
                    <ul className="flex flex-col list-none gap-4 text-right">
                        <NavLink to={`/`} className="text-font uppercase cursor-pointer hover:text-second">Productos</NavLink>
                        <NavLink to={`/category/reeles`} className="text-font uppercase cursor-pointer hover:text-second">Reeles</NavLink>
                        <NavLink to={`/category/cañas`} className="text-font uppercase cursor-pointer hover:text-second">Cañas</NavLink>
                        <NavLink to={`/category/cajas`} className="text-font uppercase cursor-pointer hover:text-second">cajas</NavLink>
                        <NavLink to={`/category/señuelos`} className="text-font uppercase cursor-pointer hover:text-second">señuelos</NavLink>
                    </ul>
                    <CartWidget />
                </div>
            )}
        </header>
        </>
    );
}

export default NavBar;
