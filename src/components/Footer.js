import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";


export default function Footer(){
    return (
        <footer className="md:h-[30rem] pt-8 relative overflow-hidden">
            <StaticImage src="../images/skyline.png" alt="Miami skyline" className="opacity-50"/>
            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <Link to="/">
                        <StaticImage src="../images/logo-colour.svg" alt="" className="h-20 w-20" />
                    </Link>
                    <div className="flex space-x-4 text-4xl">
                        <a href="https://twitter.com/XTOONZNFT" target="_blank">
                            <i className="fa-brands fa-twitter text-transparent bg-clip-text bg-gradient-to-r from-pink to-light-pink hover:text-white" />
                        </a>
                        <a href="https://www.instagram.com/xtoonznft/" target="_blank">
                            <i className="fa-brands fa-instagram text-transparent bg-clip-text bg-gradient-to-b from-pink to-light-pink hover:text-white" />
                        </a>
                        <a href="https://medium.com/@X-toonz" target="_blank">
                            <i className="fa-brands fa-medium text-transparent bg-clip-text bg-gradient-to-l from-pink to-light-pink hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}