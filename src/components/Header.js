import {useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import "../_header.scss"

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuHandler = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header>
            <nav role="navigation" className={"navbar flex--between"}>
                <Link className="navbar__title"
                      to={"/"} tabIndex={0}>또시북스</Link>
                <ul className={isMobileMenuOpen ? "navbar__menu active flex--evenly" : "navbar__menu flex--evenly"}>
                    <li className="navbar__menu__item">
                        <NavLink to={"/menu1"}>메뉴1</NavLink>
                    </li>
                    <li className="navbar__menu__item">
                        <NavLink to={"/menu2"}>메뉴2</NavLink>
                    </li>
                    <li className="navbar__menu__item">
                        <NavLink to={"/menu3"}>메뉴3</NavLink>
                    </li>
                    <li className="navbar__menu__item">
                        <NavLink to={"/menu4"}>메뉴4</NavLink>
                    </li>
                </ul>

                <div className="navbar__toggle">
                    <input id="navbar__toggle__checkbox" type="checkbox" checked={isMobileMenuOpen}
                           onChange={mobileMenuHandler}
                    />
                    <label className="navbar__toggle__label" htmlFor="navbar__toggle__checkbox">
                        <span/>
                    </label>
                </div>
            </nav>
        </header>
    )
}

export default Header;