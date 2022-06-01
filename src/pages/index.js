import React, {useState} from "react"
import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
import Section from "../components/Section";
import {StaticImage} from "gatsby-plugin-image";
import FAQAccordion from "../components/FAQAccordion";
import RarityGrid from "../components/RarityGrid";
import {Link} from "gatsby";

import AnimatedBuilding from "../components/AnimatedBuilding";
import NeonSign from "../images/neon-sign-animated.gif";
import Footer from "../components/Footer";

const frequentQuestions = [
    {
        'question': 'What is X-Toonz?',
        'answer': 'X-Toonz are 8,888 NFTs bringing decentralisation together on both the Ethereum & Solana blockchains as well as in real life. Owners of the NFT gain access to our social clubs that include a wellness spa, nightclub as well as facilities for events & conferences. We also have additional benefits for members which you can check out on our roadmap.'
    },
    {
        'question': 'Where are the locations?',
        'answer': 'Our flagship social club location is in the heart of Miami, with perfect proximity to the beach, airport and shopping district. We also have an international location to be announced soon.'
    },
    // {
    //     'question': 'Wen mint?',
    //     'answer': 'Both whitelist & public mint will be in mid-June. Stay tuned on Twitter @XToonzNFT for exact dates.'
    // },
    {
        'question': 'How much?',
        'answer': 'Whitelist 0.27 & Public Sale 0.8. During the public mint 20 out of 400 Diamond tiers will be randomly minted. The remaining 380 will be sold using a Dutch Auction after public mint has closed.'
    },
    {
        'question': 'How to get whitelist?',
        'answer': "We will be running competitions over on Twitter @XToonzNFT to win whitelist spots. We're also proud to have partnered with WenWL who's members will automatically receive a whitelist spot."
    }
]

function IndexPage(){
    const[samRevealed, setSamReveal] = useState(false);
    const[simonRevealed, setSimonReveal] = useState(false);
    const[edrilRevealed, setEdrilReveal] = useState(false);

    function handleSamReveal(){
        setSamReveal(!samRevealed);
    }

    function handleSimonReveal(){
        setSimonReveal(!simonRevealed);
    }

    function handleEdrilReveal(){
        setEdrilReveal(!edrilRevealed);
    }

    return (
    <Layout>
    {/* Hero Section */}
    <Section className="min-h-screen h-full lg:h-[115vh] bg-sky-top bg-cover bg-no-repeat relative">
        <NavigationBar />
        {/* Desktop version */}
        <div className="hidden lg:block">
            <div className="absolute top-[60vh] left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <StaticImage src="../images/red-circles.png" alt="Red circle background" width="600" />
            </div>
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden w-4/5">
                <StaticImage src="../images/red-circles-with-sign.png" alt="Red circle background" className="object-cover" />
            </div>
            <div className="absolute top-[60vh] left-1/2 -translate-x-1/2 -translate-y-[40%]">
                <div className="flex items-center justify-center -translate-y-[20px]">
                    <img src={NeonSign} alt="Neon sign for X-Toonz club" width="280" className="neon-sign hidden lg:block" />
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/4 text-white text-3xl">
                <p className="font-caslon">The luxuries of an exclusive private club.<br/>
                    The inclusivity of Web3.</p>
            </div>
        </div>

        {/* Mobile Version */}
        <div className="flex lg:hidden flex-col justify-center items-center text-white h-full md:h-2/5 mt-6">
            <div className="mb-20">
                <div className="w-full">
                    <StaticImage src="../images/red-circles-with-sign.png" alt="Red circle background" className="object-cover z-0" />
                </div>
            </div>
            <div className="text-white text-3xl">
                <p className="font-caslon">The luxuries of an exclusive private club.<br/>
                    The inclusivity of Web3.</p>
            </div>
        </div>
    </Section>

    <AnimatedBuilding />

    {/* About Section */}
    <div id="about">
        <Section className="h-full pt-10 flex flex-col items-center space-y-4 bg-sky-bottom bg-cover bg-no-repeat text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink to-light-pink">Welcome to the Club</h2>
            <p className="text-2xl text-white">8,888 X-Toonz bringing Web3 IRL, starting in the US capital of crypto.</p>
            <div className="flex flex-col space-y-4 items-center md:flex-row md:space-x-8 py-6">
                <StaticImage src="../images/pieces/rick-and-morty.jpeg" alt="X-Toonz Rick & Morty" className="w-3/4 md:h-48 md:w-48 rounded-lg" />
                <div className="flex flex-col justify-start items-center text-white">
                    <h3 className="text-2xl font-caslon font-semibold">Diamond Tier</h3>
                    <p className="text-lg">VIP status access to the Social Club with exclusive perks</p>
                    <ul className="text-center">
                        <li>Premium Suites All meals & drinks comped</li>
                        <li>Free Airport Shuttle</li>
                        <li>Eligible to stake $TIME</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col space-y-4 items-center md:flex-row md:space-x-8">
                <div className="flex flex-col justify-start items-center text-white">
                    <h3 className="text-2xl font-caslon font-semibold">Silver Tier</h3>
                    <p className="text-lg">Instant access to the Social Club</p>
                    <ul className="text-center">
                        <li>Access to all conferences and events held at Social Club</li>
                        <li>Invite to P2E Academy Passive Income</li>
                        <li>First in line to all physical/digital collaborations</li>
                    </ul>
                </div>
                <StaticImage src="../images/pieces/silver.jpeg" alt="X-Toonz Rick & Morty" className="w-3/4 md:h-48 md:w-48 rounded-lg" />
            </div>

        </Section>
        <div className="h-20 bg-gradient-to-b from-[#1c49a6] to-[#163583]" />
    </div>

    {/* Rarity */}
    <div id="rarity">
        <Section className="h-full md:h-screen flex flex-col items-center space-y-6 bg-sky-middle-short bg-cover bg-no-repeat text-center py-8">
            <h2 className="text-5xl text-white pb-4 font-inter">Rarity</h2>
            <p className="text-lg text-white">8,888 unique generated from <span className="font-bold">336</span> across <span className="font-bold">7</span> different layers.</p>
            <RarityGrid />
        </Section>
    </div>

    {/* Roadmap */}
    <div id="roadmap" className="relative">
        <StaticImage src="../images/roadmap/overlay-roadmap.png" alt="X-Toonz roadmap" className="object-cover" />
        <Link to="/roadmap">
            <div className="absolute bottom-0 mb-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-container text-dark-violet hover:text-white hover:bg-gradient-to-r hover:from-blue hover:to-pink">Expand Full Roadmap</div>
        </Link>
    </div>

    {/* FAQ */}
    <div className="bg-gradient-to-b from-darker-blue to-dark-violet">
        <div id="faq">
            <Section className="flex flex-col items-center pt-10">
                <h2 className="text-5xl text-white pb-4 font-inter">FAQ</h2>
                <div className="flex flex-col w-full lg:w-3/5 bg-light-violet rounded-lg py-6">
                    {frequentQuestions.map((pair, i, row) => {
                        if (i + 1 !== row.length){
                            return(
                                <div>
                                    <FAQAccordion question={pair.question} answer={pair.answer}/>
                                    <div className="w-[95%] h-[2px] bg-white opacity-50 mx-auto"/>
                                </div>
                            )
                        }
                        else {
                            return (
                                <FAQAccordion question={pair.question} answer={pair.answer}/>
                            )
                        }
                    })}
                </div>
            </Section>
        </div>

        {/* Team */}
        <div id="team">
            <Section className="flex flex-col items-center pt-10">
                <h2 className="text-5xl text-white pb-4 font-inter">Team</h2>
                <p className="text-white italic hidden lg:block">Hover to reveal <i className="ml-2 fa-solid fa-glasses"/></p>
                <p className="text-white italic lg:hidden">Tap to reveal <i className="ml-2 fa-solid fa-glasses"/></p>
                <div className="flex flex-wrap py-8 md:w-1/2 lg:w-4/5">
                    <div className="flex flex-col pb-8 lg:pb-0 w-full lg:w-1/3 items-center text-white group"  onClick={handleSamReveal}>
                        <div className="hidden md:block">
                            <StaticImage src="../images/pieces/superman.jpeg" alt="" className="h-60 w-60 rounded-lg block group-hover:hidden"/>
                            <StaticImage src="../images/profiles/sam.jpeg" alt="" className="h-60 w-60 rounded-lg hidden group-hover:block"/>
                        </div>
                        <div className="md:hidden">
                            {
                                !samRevealed?
                                <StaticImage src="../images/pieces/superman.jpeg" alt="" className="h-60 w-60 rounded-lg"/> :
                                <StaticImage src="../images/profiles/sam.jpeg" alt="" className="h-60 w-60 rounded-lg"/>
                            }
                        </div>
                        <h4 className="text-3xl">Sam Parsons</h4>
                        <p className="text-xl italic pb-2">CEO/Founder</p>
                        <div className="flex space-x-4 text-3xl">
                            <a href="https://twitter.com/MrJetSetter301" target="_blank"><i className="fa-brands fa-twitter" /></a>
                            <a href="https://www.linkedin.com/in/sam-parsons-2206b571/" target="_blank"><i className="fa-brands fa-linkedin" /></a>
                        </div>
                        <ul className="list-disc ml-6">
                            <li>10 years experience in Commercial Mortgage-Backed Securities</li>
                            <li>Worked on finance team for largest deal on record at the time $5.45 billion sale of Stuyvesant Town - Peter Cooper Village to BlackRock</li>
                        </ul>
                    </div>
                    <div className="flex flex-col pb-8 lg:pb-0 w-full lg:w-1/3 items-center text-white group"  onClick={handleSimonReveal}>
                        <div className="hidden md:block">
                            <StaticImage src="../images/pieces/hulk.jpeg" alt="" className="h-60 w-60 rounded-lg block group-hover:hidden"/>
                            <StaticImage src="../images/profiles/simon.jpeg" alt="" className="h-60 w-60 rounded-lg hidden group-hover:block"/>
                        </div>
                        <div className="md:hidden">
                            {
                                !simonRevealed?
                                    <StaticImage src="../images/pieces/hulk.jpeg" alt="" className="h-60 w-60 rounded-lg"/> :
                                    <StaticImage src="../images/profiles/simon.jpeg" alt="" className="h-60 w-60 rounded-lg"/>
                            }
                        </div>

                        <h4 className="text-3xl">Simon Dunkelman</h4>
                        <p className="text-xl italic pb-2">Product Lead</p>
                        <div className="flex space-x-4 text-3xl">
                            <a href="https://twitter.com/flatpackfintech" target="_blank"><i className="fa-brands fa-twitter" /></a>
                            <a href="https://www.linkedin.com/in/simondunkelman/" target="_blank"><i className="fa-brands fa-linkedin" /></a>
                        </div>
                        <ul className="list-disc ml-6">
                            <li>Financial Engineering & Risk Management MSc, Imperial College London</li>
                            <li>Previously SaaS founder in Wealth Management</li>
                        </ul>
                    </div>
                    <div className="flex flex-col pb-8 lg:pb-0 w-full lg:w-1/3 items-center text-white group"  onClick={handleEdrilReveal}>
                        <div className="hidden md:block">
                            <StaticImage src="../images/pieces/naruto.jpeg" alt="" className="h-60 w-60 rounded-lg block group-hover:hidden"/>
                            <StaticImage src="../images/profiles/edril.jpeg" alt="" className="h-60 w-60 rounded-lg hidden group-hover:block"/>
                        </div>
                        <div className="md:hidden">
                            {
                                !edrilRevealed?
                                    <StaticImage src="../images/pieces/naruto.jpeg" alt="" className="h-60 w-60 rounded-lg"/> :
                                    <StaticImage src="../images/profiles/edril.jpeg" alt="" className="h-60 w-60 rounded-lg"/>
                            }
                        </div>
                        <h4 className="text-3xl">Edril Salanza</h4>
                        <p className="text-xl italic pb-2">Lead Artist</p>
                        <div className="flex space-x-4 text-3xl">
                            <a href="https://twitter.com/Edrilordz" target="_blank"><i className="fa-brands fa-twitter" /></a>
                        </div>
                        <ul className="list-disc ml-6">
                            <li>13 years experience in illustration & advertising</li>
                            <li>Previously art for Burberry Frenchies NFT and Head Artist at Advertising firm</li>
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
        <Footer />
    </div>
    </Layout>
    )
}

export default IndexPage
