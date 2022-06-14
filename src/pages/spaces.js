import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Layout from "../components/Layout";
import Section from "../components/Section";
import {StaticImage} from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";

import TwitterRaidProfile from "../images/twitter-assets/twitter-raid.jpg";
import TwitterRaidBanner1 from "../images/twitter-assets/XToonz Twitter Banner 1.jpg";
import TwitterRaidBanner2 from "../images/twitter-assets/XToonz Twitter Banner 2.jpg";
import TwitterRaidBanner3 from "../images/twitter-assets/XToonz Twitter Banner 3.jpg";


export default function SpacesPage() {
    const leaderboard = useStaticQuery(graphql`
    query AllLeaderboard {
      data: allSpacesLeaderboardCsv(sort: {fields: total_appearances, order: ASC}) {
        nodes {
          twitter_username
          total_appearances
        }
      }
    }
    `)

    let sortedLeaderboard = leaderboard.data.nodes.sort((a, b) => {
        return b.total_appearances - a.total_appearances;
    });

    let leaderboardRows = sortedLeaderboard.map(function(node, i) {
        return (
            <tr key={i}>
                <td>{i+1}</td>
                <td>{node.twitter_username}</td>
                <td>{node.total_appearances}</td>
            </tr>
        )
    })

    console.log(leaderboard.data.nodes);

    const twitterSpaces = [
        {
            'date': '6/15/22',
            'time': '10PM EST / 7PM PST',
            'title': 'NFT Showcase',
            'url': 'https://www.twitter.com',
        },
    ];

    const [isOpen, setOpen] = useState(false);

    function handleOpen(){
        setOpen(!isOpen);
    }

    return (
        <Layout>
            {/* Hero Section */}
            <Section className="min-h-screen min-h-screen h-full bg-sky-top bg-cover bg-no-repeat relative">
                <NavigationBar />
                <div className="flex flex-col items-center py-12 text-white space-y-8 w-full">
                    <h1 className="text-5xl font-bold">Earn WL spots in 3 Easy Steps!</h1>
                    <div className="flex flex-col">
                        <div className="flex flex-col lg:flex-row text-center justify-start items-center text-2xl">
                            <h3 className="text-2xl lg:mr-4">1.</h3>
                            <h3>Download our logo profile picture</h3>
                        </div>
                        <div className="flex justify-center space-x-4 pt-4">
                            <div className="flex flex-col space-y-4 items-center">
                                <StaticImage src="../images/twitter-assets/twitter-raid.jpg" alt="X-Toonz Twitter profile" className="rounded-lg w-36" />
                                <a href={TwitterRaidProfile} className="hover:text-pink cursor-pointer" download>Download <i className="fa-solid fa-download" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 px-4 bg-light-violet w-1/2 rounded-lg">
                        <div className={`flex justify-between items-center text-pink cursor-pointer ${isOpen ? 'pb-2' : ''}`} onClick={handleOpen}>
                            <p className="italic">(Optional) Download one of our profile banner images</p>
                            <i className={`fa-solid fa-${!isOpen ? 'plus' : 'minus'}`} />
                        </div>
                        <div className={`${!isOpen ? 'hidden' : 'flex'} flex-col space-y-4`}>
                            <div className='flex flex-col'>
                                <div className="flex flex-col space-y-2 items-center justify-center pt-4 text-lime-green">
                                    <StaticImage src="../images/twitter-assets/twitter_banner_1_showcase.png" alt="X-Toonz Twitter banner with red circles" className="w-full" />
                                    <a href={TwitterRaidBanner1} className="hover:text-pink cursor-pointer" download>Download <i className="fa-solid fa-download" /></a>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className="flex flex-col space-y-2 items-center justify-center text-lime-green">
                                    <StaticImage src="../images/twitter-assets/twitter_banner_2_showcase.png" alt="X-Toonz Twitter banner with NFT characters" className="w-full" />
                                    <a href={TwitterRaidBanner2} className="hover:text-pink cursor-pointer" download>Download <i className="fa-solid fa-download" /></a>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className="flex flex-col space-y-2 items-center justify-center text-lime-green">
                                    <StaticImage src="../images/twitter-assets/twitter_banner_3_showcase.png" alt="X-Toonz Twitter banner with Miami skyline" className="w-full" />
                                    <a href={TwitterRaidBanner3} className="hover:text-pink cursor-pointer" download>Download <i className="fa-solid fa-download" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex flex-col lg:flex-row text-center justify-start items-center text-2xl">
                            <h3 className="text-2xl lg:mr-4">2.</h3>
                            <h3>Set your profile picture (and optionally banner) to X-Toonz</h3>
                        </div>
                        <StaticImage src="../images/profile-change-explainer.png" alt="Explain how to change Twitter profile and banner" className="w-1/2" />
                        <ol className="list-disc font-light text-lg">
                            <li>Go to 'Profile' on the Twitter website or app</li>
                            <li>Click on 'Edit Profile' button next to your profile</li>
                            <li>Upload the photos you downloaded in <i>Step 1</i> above for your profile (and also banner if you wish).</li>
                        </ol>
                    </div>

                    <div className="flex flex-col items-center ">
                        <div className="flex flex-col lg:flex-row text-center justify-start items-center text-2xl pb-4">
                            <h3 className="lg:mr-4">3.</h3>
                            <h3>Attend one of the upcoming Twitter Spaces below</h3>
                        </div>
                        <table className="table-auto w-3/4">
                            <thead className="text-lg font-semibold">
                                <td>Date</td>
                                <td>Time</td>
                                <td>Twitter Space Link</td>
                            </thead>
                            <tbody>
                            {twitterSpaces.map(space => {
                                return (
                                    <tr>
                                        <td>{space.date}</td>
                                        <td>{space.time}</td>
                                        <td><a href={space.url} className="hover:text-pink">{space.title}</a></td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col space-y-4 items-center">
                        <h2 className="text-2xl underline">Leaderboard</h2>
                        <table className="text-center table-fixed w-3/4 md:w-1/2">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Twitter Handle</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                            {leaderboardRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}