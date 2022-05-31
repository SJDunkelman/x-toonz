import React, {useState} from "react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from "gatsby";
import {AnchorLink} from "gatsby-plugin-anchor-links";

function NavigationBar(){
    const [isOpen, setisOpen] = useState(false);

    function handleClick() {
        setisOpen(!isOpen);
    }

    return (
        <nav className="sticky top-4 z-50 px-4 text-dark-violet">
            <div className="flex justify-between w-full py-4 px-6 rounded-full bg-light-violet shadow-container font-semibold">
                <div className="flex justify-center items-center space-x-8 text-xl">
                    <Link to="/">
                        <StaticImage src="../images/logo-colour.svg" width="48" alt="X-Toonz"/>
                    </Link>
                    <div className="hidden lg:flex justify-center items-center space-x-8">
                        <AnchorLink to="/#about" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">About</AnchorLink>
                        <AnchorLink to="/#rarity" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">Rarity</AnchorLink>
                        <Link to="/roadmap" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">Roadmap</Link>
                        <AnchorLink to="/#faq" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">FAQ</AnchorLink>
                        <AnchorLink to="/#team" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">Team</AnchorLink>
                    </div>

                </div>
                <div className="hidden lg:flex justify-center items-center space-x-8 text-3xl">
                    <a href="https://twitter.com/XTOONZNFT" target="_blank"><i className="fa-brands fa-twitter hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink" /></a>
                    <a href="https://www.instagram.com/xtoonznft/" target="_blank"><i className="fa-brands fa-instagram hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink" /></a>
                    <a href="https://medium.com/@X-toonz" target="_blank"><i className="fa-brands fa-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink" /></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-discord hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink" /></a>
                    {/*<StaticImage src="../images/opensea.svg" width="20" alt="OpenSea"/>*/}
                    {/*<StaticImage src="../images/looksrare.svg" width="20" alt="LooksRare"/>*/}
                </div>
                <div className="flex lg:hidden items-center" onClick={handleClick}>
                    {isOpen && (<i className="fa-solid fa-xmark text-3xl menu-button cursor-pointer"></i>)}
                    {!isOpen && (<i className="fa-solid fa-bars text-2xl cursor-pointer"></i>)}
                </div>
            </div>
            <div className={`space-y-4 mt-4 ${isOpen ? "flex flex-col" : "hidden"}`}>
                <ul className="bg-light-violet rounded-lg w-full text-center text-dark-violet font-semibold">
                    <AnchorLink to="/#about">
                        <li className="py-2 font-bold border-b-[1px] border-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">About</li>
                    </AnchorLink>
                    <AnchorLink to="/#rarity">
                        <li className="py-2 font-bold border-b-[1px] border-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">Rarity</li>
                    </AnchorLink>
                    <Link to="/roadmap">
                        <li className="py-2 font-bold border-b-[1px] border-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">Roadmap</li>
                    </Link>
                    <AnchorLink to="/#faq">
                        <li className="py-2 font-bold border-b-[1px] border-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">FAQ</li>
                    </AnchorLink>
                    <AnchorLink to="/#team">
                        <li className="py-2 font-bold border-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-light-pink">Team</li>
                    </AnchorLink>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;