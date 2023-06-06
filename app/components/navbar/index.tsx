import React from "react";

function Navbar() {
    return (
        <header className="flex flex-row items-center justify-between bg-white p-4 absolute top-0 left-0 w-full">
            <img
                alt="Logo"
                src="/Logo.png"
                className="box-border w-[196px]"
            />
            <img
                alt="Menu"
                src="/Menu.png"
                className="box-border"
            />
        </header>
    );
}

export default Navbar;