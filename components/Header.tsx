"use client"

import React, { useState, useEffect } from 'react'
import "../styles/header.css";

const categories: { name: string, link: string }[] = [
    { name: "home", link: "#" },
    { name: "trending", link: "#trending" },
    { name: "destinations", link: "#destinations" },
    { name: "testimonials", link: "#testimonials" },
]

const Header: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [id, setId] = useState<string | null>("home");

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const sections = document.querySelectorAll("section");

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 74) {
                setId(section.getAttribute("id"));
            }
        })

        if (scrolled > 0) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        toggleVisible()

        window.addEventListener("scroll", toggleVisible)

        return () => {
            window.removeEventListener("scroll", toggleVisible)
        }
    }, [])

    return (
        <header
            style={{
                background: visible || showMenu ? "var(--bg-main)" : "transparent",
                boxShadow: visible ? "2px 20px 30px var(--shadow-color)" : "none"
            }}
        >
            <nav>
                <a href="#" className="logo">
                    <i className="fa-solid fa-person-hiking"></i> Travel
                </a>

                <div className="menu__btn" onClick={() => setShowMenu(prev => !prev)}>
                    {showMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                </div>

                <ul style={{ height: showMenu ? 250 : 0 }}>
                    {
                        categories.map(category => {
                            return (
                                <li key={category.name}>
                                    <a href={category.link} className={id === category.name ? "active" : ""}>
                                        {category.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header