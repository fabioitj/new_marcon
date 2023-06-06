"use client";
import React, { useState } from "react";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const openedIn = "flex flex-col gap-4 absolute right-2 top-24 bg-white p-4";
    const closedIn = "hidden";

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
                className="box-border block lg:hidden"
                onClick={() => setShowMenu(showMenu => !showMenu)}
            />
   
            <ul className={`${(showMenu ? openedIn : closedIn)}  lg:flex gap-8`}>
                <li><a className="p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#first">First page</a></li>
                <li><a className="p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#second">Second page</a></li>
                <li><a className="p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#third">Third page</a></li>
                <li><a className="p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#fourth">Fourth page</a></li>
                <li><a className="p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#fifth">Fifth page</a></li>
                <li><a className="p-4 transition-all duration-200 hover:bg-neutral-900 hover:text-white" href="#sixth">Sixth page</a></li>
            </ul>
        </header>
    );
}

export default Navbar;