import React from "react";

import { Button, Logo, Logout } from '../index'
import { Link, NavLink } from "react-router-dom";

import { useSelector } from 'react-redux'
function Header() {

    const authStatus = useSelector(state => state.status)

    const navitems = [
        { name: 'Home', url: '/', active: true },
        { name: 'Messenger', url: '/messenger', active: authStatus },
        { name: 'Account', url: '/account', active: authStatus },
        { name: 'Add Post', url: '/add-post', active: authStatus },
    ]

    const acoountItems = [
        { name: 'Sign In', url: '/sign-in', active: !authStatus },
        { name: 'Sign Up', url: '/sign-up', active: !authStatus },
    ]

    return (
        <>
            {/* Hello world */}
            <header className=" bg-bg-color">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <Link to={'/'} className="block text-teal-600">
                        <Logo />
                    </Link>
                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                {navitems?.map((item) =>
                                    item.active ? (
                                        item.name === 'Add Post' ? <NavLink key={item.name} className="block rounded-md bg-active text-text-color font-poppins px-5 py-2.5 text-sm font-medium transition hover:bg-blue-600" to={item.url}>
                                            {item.name}
                                        </NavLink> : (<li key={item.name}>
                                            <NavLink
                                                className={({ isActive }) => `${isActive ? 'text-active' : 'text-text-color'} text-base font-poppins hover:tracking-[1px] de `}
                                                to={item.url}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>)
                                    ) : null
                                )}
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="sm:flex flex items-center justify-center gap-4 flex-row sm:gap-4">
                                {authStatus && <Logout />}
                                {acoountItems.map((item) => item.active ? <Link key={item.name}
                                    className="block rounded-md bg-active text-text-color font-poppins px-5 py-2.5 text-sm font-medium transition hover:bg-blue-600"
                                    to={item.url}
                                >
                                    {item.name}
                                </Link> : null)}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
}

export default Header