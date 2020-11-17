import React from 'react';

import RouterLink from "../router-link";

const Header = () => {
    return (
        <header className="bg-primary">
            <nav className="container navbar justify-content-lg-start">
                <RouterLink path="/" classNames="nav-link nav-item text-white" >Столы</RouterLink>
                <RouterLink path="/total" classNames="nav-link nav-item text-white" >Итог дня</RouterLink>
            </nav>
        </header>
    );
}

export default Header;