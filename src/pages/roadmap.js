import React from "react";
import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
import Section from "../components/Section";
import Roadmap from "../images/roadmap/roadmap.png";

export default function RoadmapPage(){
    return (
        <Layout >
            <Section className="py-6">
            <NavigationBar />
            <div className="h-full">
                <img src={Roadmap} alt="X-Toonz roadmap" className="absolute top-0 left-0"/>
            </div>
            </Section>
        </Layout>
    )
}