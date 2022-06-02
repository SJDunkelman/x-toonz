import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export default function AnimatedBuilding(){
    const imageClasses = 'absolute top-0 left-0 bg-no-repeat h-screen overflow-hidden';
    return (
        <>
            <div className="h-screen relative overflow-hidden hidden md:block">
                <StaticImage src="../images/building/building-full.png" alt="Miami city background" className={`${imageClasses} z-10`} />
                {/*<StaticImage src="../images/building/cloud-1.png" alt="Miami city background" className={`${imageClasses} z-20 clouds-1 -translate-x-1/3`} />*/}
                {/*<StaticImage src="../images/building/cloud-2.png" alt="Miami city background" className={`${imageClasses} z-30 clouds-2 -translate-x-2/3`} />*/}
                {/*<StaticImage src="../images/building/cloud-3.png" alt="Miami city background" className={`${imageClasses} z-40 clouds-3`} />*/}
                {/*<StaticImage src="../images/building/strobe-1.png" alt="Miami city background" className={`${imageClasses} z-40 strobe-1`} />*/}
                {/*<StaticImage src="../images/building/strobe-2.png" alt="Miami city background" className={`${imageClasses} z-50 strobe-2`} />*/}
            </div>
            <div className="h-full flex justify-center items-center md:hidden">
                <StaticImage src="../images/building/half-building-complete.png" alt="Miami city background" className="w-screen" />
            </div>
        </>

    )
}