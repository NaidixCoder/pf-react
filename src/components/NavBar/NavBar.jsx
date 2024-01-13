import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/img/headerLogo-white.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {

    return (
        <>
        <header className="bg-main py-6 px-12 flex justify-between items-center">
            <Link to={"/"}>
                <img className="h-10" src={Logo} alt="Logo Mati Infante" />
            </Link>
            <nav className="hidden md:flex md:visible">
                
                <ul className="flex list-none gap-4">
                    <NavLink to={`/`} className="text-font uppercase cursor-pointer hover:text-second">Productos</NavLink>
                    <NavLink to={`/category/reeles`} className="text-font uppercase cursor-pointer hover:text-second">Reeles</NavLink>
                    <NavLink to={`/category/cañas`} className="text-font uppercase cursor-pointer hover:text-second">Cañas</NavLink>
                    <NavLink to={`/category/cajas`} className="text-font uppercase cursor-pointer hover:text-second">cajas</NavLink>
                    <NavLink to={`/category/señuelos`} className="text-font uppercase cursor-pointer hover:text-second">señuelos</NavLink>
                </ul>
                
            </nav>
                <CartWidget/>
        </header>   
        </>
    )
}

export default NavBar