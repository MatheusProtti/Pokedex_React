import React from "react";
import Logo from "./Logo";
import Search from "./SearchPokemon";

function Header(){

    return(
        <div className="header">
            <Logo></Logo>
            <Search></Search>
        </div>
    )
}

export default Header;