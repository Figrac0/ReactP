import NavLinkMenu from "../UI/NavLinkMenu";

function Header() {
    return (
        <>
            <header className="flex justify-between px-5 py-8 bg-blue-200 shadow-md">
                <img src="/logo.svg" className="h-6" alt="logo" />
                <nav>
                    <ul className="flex gap-x-14">
                        <li>
                            <NavLinkMenu to={"/"}>Home</NavLinkMenu>
                        </li>
                        <li>
                            <NavLinkMenu to={"/about"}>About</NavLinkMenu>
                        </li>
                        <li>
                            <NavLinkMenu to={"/cart"}>Cart</NavLinkMenu>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
