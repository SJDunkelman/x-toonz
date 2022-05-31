import React from "react";
import Seo from "../components/Seo"

export default function Layout({children}){
    return(
        <>
            <Seo title="X-Toonz" />
            <main className="min-w-screen">
                {children}
            </main>
        </>
    )
}
