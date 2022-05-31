import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export default function AnimatedBuilding(){
    const imageClasses = 'object-cover absolute top-0 left-0 bg-no-repeat';
    return (
        <div className="lg:h-screen w-screen relative overflow-hidden">
            <StaticImage src="../images/building/background.png" alt="Miami city background" className={`${imageClasses} z-0 hidden lg:block`} />
            <StaticImage src="../images/building/building.png" alt="Miami city background" className={`${imageClasses} z-10 hidden lg:block`} />
            <StaticImage src="../images/building/cloud-1.png" alt="Miami city background" className={`${imageClasses} z-20 clouds-1 -translate-x-1/3 hidden lg:block`} />
            <StaticImage src="../images/building/cloud-2.png" alt="Miami city background" className={`${imageClasses} z-30 clouds-2 -translate-x-2/3 hidden lg:block`} />
            <StaticImage src="../images/building/cloud-3.png" alt="Miami city background" className={`${imageClasses} z-40 clouds-3 hidden lg:block`} />
            <StaticImage src="../images/building/strobe-1.png" alt="Miami city background" className={`${imageClasses} z-40 strobe-1 hidden lg:block`} />
            <StaticImage src="../images/building/strobe-2.png" alt="Miami city background" className={`${imageClasses} z-50 strobe-2 hidden lg:block`} />
        </div>
    )
}